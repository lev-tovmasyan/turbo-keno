import React, {useEffect, useRef} from 'react';
import InsufficientFunds from './InsufficientFunds';
import {connect} from 'react-redux';
import Ticket from '../universal/Ticket/Ticket';
import DynamicBetTicket from './DynamicBetTicket';
import {BALL_COUNTS, MATCH_GRID} from '../../constants/game';
import {setTicketOption} from '../../redux/actions/ticketOptionActions';
import {getTimeFromIso} from '../../helpers/game';

function BetTicketBoard({chosenButtons, setTicketOption, tickets, betAmount}) {

  const refContainer = useRef(null);

  useEffect(() => {

    const options = calculateOptions(chosenButtons.length, betAmount);
    setTicketOption(options);

  }, [chosenButtons, betAmount]);

  useEffect(() => {
    const refHeight = refContainer.current.scrollHeight;
    refContainer.current.scrollTo(0, refHeight);
  }, [tickets]);

  return (
    <div ref={refContainer} className="game-grid__keno-bet-board">
      {tickets.map(({id, date, digits}, i) =>
        <Ticket key={id}
                id={id}
                headNumber={i + 1}
                headTime={getTimeFromIso(date)}
                digits={digits.sort((a, b) => a - b)}
                isColorNeed={true}
                ballCount={BALL_COUNTS.USER_TICKET}
        />
      )}
      <DynamicBetTicket headNumber={tickets.length + 1} isDelBtnNeed={!!chosenButtons.length}
                        digits={chosenButtons.sort((a, b) => a - b)}/>
      <InsufficientFunds/>
    </div>
  );
}

function calculateOptions(betBtnCount, betAmount) {
  const match = MATCH_GRID[betBtnCount];
  const coincidence = match.reduce((acc, el, i) => {
    el !== null && acc.push(i);
    return acc;
  }, []);
  const payouts = match.filter(el => el !== null);
  const possibleWin = payouts[payouts.length - 1] * betAmount || '';
  return {
    coincidence, payouts, possibleWin
  };
}

const mapStateToProps = ({ticketReducer, betBtnsReducer, betAmountReducer}) => ({
  tickets: ticketReducer,
  chosenButtons: betBtnsReducer,
  betAmount: betAmountReducer,
});

const mapDispatchToProps = {setTicketOption};

export default connect(mapStateToProps, mapDispatchToProps)(BetTicketBoard);