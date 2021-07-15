import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {addTicket} from '../../../redux/actions/ticketActions';
import {getStoreState} from '../../../redux/store';
import {setButtonsActive} from "../../../redux/actions/activateBetBtns";
import {COMPUTING_TIME} from "../../../constants/game";
import { useLanguageData } from '../../../Context/LanguageContext';

function OkButton({betBtnCount, betAmount, tickets, addTicket, betAmountOption, setButtonsActive, secTillDraw}) {

  const languageData = useLanguageData()
  const {minBet} = betAmountOption;

  const [isButtonActive, changeButtonActivity] = useState(true);
  const [canAddTicket, setCanAddTicket] = useState(true)

  const areButtonsChosen = betBtnCount > 0;
  const isButtonEnabled = areButtonsChosen && isButtonActive;

  const requestTimer = (sec) => {
    let timerInSeconds = sec;
    const _timerCountDown = () => {
      if (timerInSeconds <= COMPUTING_TIME+1) {
        setCanAddTicket(false);
      }
      timerInSeconds--;
    };
    return setInterval(() => _timerCountDown(), 1000);
  }

  useEffect(() => {
    const timerInterval = requestTimer(secTillDraw);

    return () => {
      clearInterval(timerInterval);
    };
  }, [secTillDraw]);

  return (
    <div className="game-grid__keno-game-config-button-container">
      <button className={`game-grid__keno-ok-button${(isButtonEnabled) ? '' : ' inactive'}`} onClick={handleOk}>
        {languageData['bet'] && languageData['bet'].toUpperCase()}
      </button>
    </div>
  );

  async function handleOk() {
    if (isButtonEnabled && canAddTicket) {
      const ticketHeadNumber = tickets.length + 1;
      changeButtonActivity(false);
      setButtonsActive()
      await addTicket(makeTicket(ticketHeadNumber));
      changeButtonActivity(true);
      setButtonsActive()
    }
  }
}

function makeTicket(ticketHeadNumber) {
  const date = new Date().toISOString();
  const {betBtnsReducer: digits, betAmountReducer: betMoney} = getStoreState();

  return {
    id: ticketHeadNumber,
    date,
    digits,
    betMoney
  };
}

const mapStateToProps = ({betBtnsReducer, ticketReducer, betAmountReducer, betAmountOptionReducer, secTillDrawReducer}) => ({
  betBtnCount: betBtnsReducer.length,
  tickets: ticketReducer,
  betAmount: betAmountReducer,
  betAmountOption: betAmountOptionReducer,
  secTillDraw: secTillDrawReducer
});

const mapDispatchToProps = {
  addTicket, setButtonsActive
};

export default connect(mapStateToProps, mapDispatchToProps)(OkButton);