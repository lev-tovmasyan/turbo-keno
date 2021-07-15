import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import RaffleBallBoard from './RaffleBallBoard';
import {BALL_COUNTS, MATCH_GRID} from '../../constants/game';
import {getTimeFromIso} from '../../helpers/game';
import TicketBox from '../universal/Ticket/TicketBox';
import TicketBallContainer from '../universal/Ticket/TicketBallContainer/TicketBallContainer';
import TicketBall from '../universal/Ticket/TicketBall/TicketBall';
import {forMap} from '../../helpers/general';
import {goToBettingScene} from '../../redux/actions/sceneActions';
import {getGameData, getUserBalance} from '../../redux/actions/dataActions';
import {getKenoType} from '../../helpers/game';
import { useLanguageData } from '../../Context/LanguageContext';

const TIMEOUT_AFTER_DIGITS_PULL = 2000;
const TIMEOUT_AFTER_CONGRATS = 3000;
const DIGIT_PULL_TIMEOUT = 1000;
let intervalIds = [];

const RaffleScene = ({raffleInfo, getGameData, goToBettingScene, getUserBalance}) => {
  const languageData = useLanguageData()

  const {userTickets = [], digits: raffleDigits = []} = raffleInfo;

  const [bigDigit, setBigDigit] = useState('');
  const [pulledDigits, setPulledDigits] = useState([]);
  const [isGameFinish, setGameFinish] = useState(false);
  const [isCongratsTime, setCongrats] = useState(false);
  const [ticketHeadInfos, setTicketHeadInfos] = useState([]);

  useEffect(() => {
    const ticketHeadInfos = userTickets.map((ticket) => {
      const wonDigitCount = ticket.digits.filter((digit) => ticket.winCombination.hasOwnProperty(digit)).length;
      return {
        headPayout: MATCH_GRID[ticket.digits.length][wonDigitCount] || '',
        ticketStatus: ticket.ticketStatus,
        headWonMoney: ticket.wonMoney || '',
      };
    });

    (async function () {
      await pullBalls(raffleDigits, setBigDigit);
      setGameFinish(true);
      setTicketHeadInfos(ticketHeadInfos);
      await waiting(TIMEOUT_AFTER_DIGITS_PULL);
      setCongrats(true);
      await waiting(TIMEOUT_AFTER_CONGRATS);
      goToBettingScene();
      getGameData(getKenoType());
      getUserBalance(getKenoType());
    })();

    return () => {
      intervalIds.forEach((id) => clearInterval(id));
      intervalIds = [];
    };
  }, [raffleInfo]);

  return (

    <div className="game-grid__container active-overflow">
      <div className="game-grid__raffle">
        <div
          className={`game-grid__raffle-board ${isGameFinish ? 'end' : ''} ${
            isCongratsTime ? 'congratulations' : ''
          }`}
        >
          <RaffleBallBoard bigDigit={bigDigit} digits={pulledDigits}/>
        </div>
        <div className="game-grid__raffle-tickets">
          {!userTickets.length && <div className="no-tickets">{languageData['noTickets']}</div>}
          {userTickets.map((ticket, i) => {
            const ticketHeadInfo = ticketHeadInfos[i] || {};
            const {ticketStatus = '', headWonMoney = '', headPayout = ''} = ticketHeadInfo;

            return (
              <TicketBox
                headNumber={i + 1}
                key={ticket.id}
                headBet={ticket.betMoney}
                headTime={getTimeFromIso(ticket.date)}
                ticketStatus={ticketStatus}
                headWonMoney={headWonMoney}
                headPayout={headPayout}
              >
                <TicketBallContainer>
                  {forMap(BALL_COUNTS.USER_TICKET, (i) => {
                    const digit = (ticket.digits[i] || '').toString();
                    const allDigits = [bigDigit, ...pulledDigits];
                    return (
                      <TicketBall
                        key={i}
                        withStars={true}
                        digit={digit}
                        isDigitWon={!!allDigits.includes(digit)}
                      />
                    );
                  })}
                </TicketBallContainer>
              </TicketBox>
            );
          })}
        </div>
      </div>
    </div>
  );

  function pullBalls() {
    return new Promise((resolve) => {
      const tempDigits = [...raffleDigits];

      const id = setInterval(() => {
        const pulledDigit = tempDigits.shift();
        const isGameFinished = !tempDigits.length;

        setBigDigit((prevBigDigit) => {
          !!prevBigDigit &&
          setPulledDigits((prevDigits) => ([...prevDigits, prevBigDigit]));
          return pulledDigit;
        });

        if (isGameFinished) {
          waiting(DIGIT_PULL_TIMEOUT).then(() => {
            setPulledDigits((prevDigits) => ([...prevDigits, pulledDigit]));
            resolve();
          });
          clearInterval(id);
        }
      }, DIGIT_PULL_TIMEOUT);
      intervalIds.push(id);
    });
  }
};

function waiting(ms) {
  return new Promise(resolve => {
    const id = setTimeout(() => resolve(), ms);
    intervalIds.push(id);
  });
}

const mapStateToProps = ({raffleInfoReducer}) => ({
  raffleInfo: raffleInfoReducer,
});

const mapDispatchToProps = {
  goToBettingScene: () => goToBettingScene,
  getGameData, getUserBalance
};
export default connect(mapStateToProps, mapDispatchToProps)(RaffleScene);