import React from "react";
import {connect} from 'react-redux';
import {getTimeFromIso} from "../../../../../constants/game";
import {useLanguageData} from "../../../../../Context/LanguageContext";

const TicketHeader = ({date, amount, coefficient, number, currency, isCongratsTime, ticketStatus, wonMoney}) => {
  const languageData = useLanguageData()

  const time = getTimeFromIso(date);
  const payout = !!coefficient ? 'x' + coefficient : '';
  const isWon = isCongratsTime && ticketStatus === 'won';

  const win = isWon  ? `* ${wonMoney/amount} = ${wonMoney} ${currency}` : '';

  const winStyles = {
    width: '100%',
    textAlign: 'right',
    paddingRight: '25px',
  };

  return (
    <div className={`current-ticket__grid current-ticket__grid--header ${isWon ? languageData.win.toLowerCase() : '' }`}>
      <div className="current-ticket__row">
        <div className="current-ticket__ticket-number">
          {languageData.ticket} {number}
        </div>
        <div className="current-ticket__time">
          {time}
        </div>
      </div>
      <div className="current-ticket__row" style={{width: isWon ? '40%' : ''}}>
        <div className="current-ticket__bet-title" style={isWon ? winStyles : {}}>
          {languageData.bet} {amount} {currency} {win}
        </div>
        <div className="current-ticket__rate-odds" style={{display: isWon ? 'none' : ''}}>{payout}</div>
      </div>
    </div>
  );
};

const mapStateToProps = ({currencyReducer, isCongratsTime}) => ({
  currency: currencyReducer,
  isCongratsTime
});

export default connect(mapStateToProps)(TicketHeader);
