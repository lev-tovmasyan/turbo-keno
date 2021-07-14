import React from "react";
import {connect} from 'react-redux';
import {useLanguageData} from "../../../../../Context/LanguageContext";

const TicketHeader = ({number, selectedAmount, payout, currency}) => {
    const languageData = useLanguageData()

    return (
    <div className="current-ticket__grid current-ticket__grid--header">
      <div className="current-ticket__row">
        <div className="current-ticket__ticket-number">
            {languageData.ticket} {number}
        </div>
      </div>
      <div className="current-ticket__row">
        <div className="current-ticket__bet-title">{languageData.bet} {selectedAmount} {currency}</div>
        <div className="current-ticket__rate-odds">{payout}</div>
      </div>
    </div>
  );
};

const mapStateToProps = ({currencyReducer}) => ({
  currency: currencyReducer
});

export default connect(mapStateToProps)(TicketHeader);
