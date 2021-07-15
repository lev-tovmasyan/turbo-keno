import React from 'react';
import {connect} from 'react-redux';

function TicketBox(props) {
  const {
    headNumber = '', headId = '', headTime = '', headBet = '',
    isStatusTextNeed = false, ticketStatus = '', headWonMoney, headPayout,
    currency
  } = props;
  const defaultHeading = (!!headNumber && 'Ticket ') || (!!headId && 'ID: ') || '';
  const headerNumber = defaultHeading + (headNumber || headId);
  const headerBet = <span className="game-grid__raffle-ticket-bet">{headBet} {currency}</span>;

  return (
    <div className={`game-grid__ticket ${ticketStatus}`}>
      <div className="game-grid__ticket-header">
        <div className="game-grid__ticket-header-number">
          {headerNumber}
          {!!headBet && headerBet}
          {ticketStatus === 'won' && ` x${headPayout} = ${headWonMoney} ${currency}`}
        </div>
        <div className="game-grid__ticket-header-time">
          {headTime}
          {isStatusTextNeed ? ticketStatus.toUpperCase() : ''}
        </div>
      </div>
      <div className="game-grid__ticket-body">
        {props.children}
      </div>
    </div>
  );
}

const mapStateToProps = ({currencyReducer}) => ({
  currency: currencyReducer
});

export default connect(mapStateToProps)(TicketBox);