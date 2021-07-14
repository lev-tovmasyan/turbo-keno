import React from "react";
import {connect} from 'react-redux';
import {useLanguageData} from "../../../../../Context/LanguageContext";

const TicketOdds = ({wonMoney, ticketStatus, currency}) => {
    const languageData = useLanguageData()

    return (
    <div className="current-ticket__row">
      <div className="current-ticket__bet-title">
        {ticketStatus === 'won' ? languageData.win : ticketStatus === 'lost' ? languageData.loss : languageData.pending}
      </div>
      <div className="current-ticket__rate-odds">
        {ticketStatus === 'won' ? `${wonMoney} ${currency}` : '-'}
      </div>
    </div>
  );
};

const mapStateToProps = ({currencyReducer}) => ({
  currency: currencyReducer
});

export default connect(mapStateToProps)(TicketOdds);
