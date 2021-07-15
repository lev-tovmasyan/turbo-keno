import TicketBox from '../../../universal/Ticket/TicketBox';
import TicketBallContainer from '../../../universal/Ticket/TicketBallContainer/TicketBallContainer';
import {forMap} from '../../../../helpers/general';
import TicketBall from '../../../universal/Ticket/TicketBall/TicketBall';
import React from 'react';
import {MATCH_GRID} from '../../../../constants/game';

function UserHistoryTicket(props) {

  const ticketOptions = props.children;
  const {winCombination} = props;

  // for TicketBox
  const {headNumber = '', headId = '', headTime = '', headBet = '', isStatusTextNeed, ticketStatus = '', headWonMoney} = props;
  // for TicketBall
  const {digits, ballCount} = props;

  const wonDigitCount = digits.filter(digit => winCombination.hasOwnProperty(digit)).length;
  const headPayout = MATCH_GRID[digits.length][wonDigitCount];

  return (
    <TicketBox {...{headNumber, headId, headTime, headBet, ticketStatus, headWonMoney, headPayout, isStatusTextNeed}}>
      <TicketBallContainer isDelBtnNeed={false}>
        {forMap(ballCount, (index) => {
          const digit = digits[index] || '';
          const isDigitWon = !!winCombination.hasOwnProperty(digit);
          return <TicketBall digit={digit} key={index} isDigitWon={isDigitWon}/>;
        })}
      </TicketBallContainer>
      {ticketOptions}
    </TicketBox>
  );
}

export default UserHistoryTicket;