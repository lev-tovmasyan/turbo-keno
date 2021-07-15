import TicketBox from '../universal/Ticket/TicketBox';
import TicketBallContainer from '../universal/Ticket/TicketBallContainer/TicketBallContainer';
import {forMap} from '../../helpers/general';
import TicketBall from '../universal/Ticket/TicketBall/TicketBall';
import {connect} from 'react-redux';
import React from 'react';
import BetTicketOptions from './BetTicketOptions/BetTicketOptions';
import {getTicketBallColor} from '../../helpers/game';
import {BALL_COUNTS} from '../../constants/game';
import PropTypes from 'prop-types';

DynamicBetTicket.propTypes = {
  headNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  isDelBtnNeed: PropTypes.bool.isRequired,
  digits: PropTypes.array.isRequired,
};

function DynamicBetTicket({headNumber, isDelBtnNeed, digits, options, ballFrequency, currency}) {

  const {coincidence = [], payouts = [], possibleWin = '',} = options;

  return (
    <TicketBox headNumber={headNumber} currency={currency}>
      <TicketBallContainer isDelBtnNeed={isDelBtnNeed}>
        {forMap(BALL_COUNTS.USER_TICKET, (index) => {
          const digit = digits[index];
          const color = getTicketBallColor(ballFrequency, digit);
          return <TicketBall digit={digit || ''} key={index} color={color}/>;
        })}
      </TicketBallContainer>
      <BetTicketOptions {...{coincidence, payouts, possibleWin}}/>
    </TicketBox>
  );
}

const mapStateToProps = ({ticketOptionReducer, ballFrequencyReducer, currencyReducer}) => ({
  options: ticketOptionReducer,
  ballFrequency: ballFrequencyReducer,
  currency: currencyReducer
});

export default connect(mapStateToProps)(DynamicBetTicket);