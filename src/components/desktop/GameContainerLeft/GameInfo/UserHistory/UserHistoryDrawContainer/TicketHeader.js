import React from "react";
import {useLanguageData} from "../../../../../Context/LanguageContext";

const TicketHeader = ({time, betMoney, wonMoney, number, currency}) => {
    const languageData = useLanguageData()

  const payload = !!wonMoney / betMoney ? 'x' + wonMoney / betMoney : '';

  return (
    <div className="current-ticket__grid current-ticket__grid--header">
      <div className="current-ticket__row">
        <div className="current-ticket__ticket-number">
            {languageData.ticket} {number}
        </div>
        <div className="current-ticket__time">
          {time}
        </div>
      </div>
      <div className="current-ticket__row">
        <div className="current-ticket__bet-title">{languageData.bet} {betMoney} {currency}</div>
        <div className="current-ticket__rate-odds">{payload}</div>
      </div>
    </div>
  );
};

export default TicketHeader;
