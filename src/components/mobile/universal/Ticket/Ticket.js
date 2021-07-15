import React from 'react';
import {connect} from 'react-redux';
import TicketBox from './TicketBox';
import TicketBallContainer from './TicketBallContainer/TicketBallContainer';
import TicketBall from './TicketBall/TicketBall';
import {forMap} from '../../../helpers/general';
import {getTicketBallColor} from '../../../helpers/game';

function Ticket(props) {

  const ticketOptions = props.children;
  const {isColorNeed = false} = props;
  // for TicketBox
  const {headNumber = '', headId = '', headTime = '', headBet = '', ticketStatus = ''} = props;
  // for TicketBall
  const {digits, ballCount} = props;

  if (!ballCount) {
    throw new Error('pass ballCount prop into ticket');
  }

  return (
    <TicketBox {...{headNumber, headId, headTime, headBet, ticketStatus}}>
      <TicketBallContainer isDelBtnNeed={false}>
        {forMap(ballCount, (index) => {
          const digit = digits[index] || '';
          const color = isColorNeed ? getTicketBallColor(props.ballFrequency, digit) : '';
          return <TicketBall digit={digit} key={index} color={color}/>;
        })}
      </TicketBallContainer>
      {ticketOptions}
    </TicketBox>
  );
}

const mapStateToProps = ({ballFrequencyReducer}) => ({
  ballFrequency: ballFrequencyReducer,
});

export default connect(mapStateToProps)(Ticket);