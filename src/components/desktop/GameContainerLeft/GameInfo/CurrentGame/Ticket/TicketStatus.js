import React from 'react';
import {useLanguageData} from "../../../../../Context/LanguageContext";

function TicketStatus() {
    const languageData = useLanguageData()

  return (
    <div className="current-ticket__row">
      <div className="current-ticket__bet-title">
          {languageData.status}
      </div>
      <div className="current-ticket__rate-odds">
          {languageData.pending}
      </div>
    </div>
  );
}

export default TicketStatus;
