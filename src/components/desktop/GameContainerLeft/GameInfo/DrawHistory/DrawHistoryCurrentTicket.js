import React from 'react';
import DrawHistoryCurrentTicketNumber from "./DrawHistoryCurrentTicketNumber";
import {getTimeFromIso} from "../../../../constants/game";
import {useLanguageData} from "../../../../Context/LanguageContext";
const DrawHistoryCurrentTicket = ({id, digits, dt}) => {
  let time = getTimeFromIso(dt);
    const languageData = useLanguageData()

  return (
    <li className="current-ticket">
      <div className="current-ticket__grid current-ticket__grid--header">
        <div className="current-ticket__row">
          <div className="current-ticket__ticket-number">
              {languageData.ID}: {id}
          </div>
          <div className="current-ticket__time">
            {time}
          </div>
        </div>
      </div>

      <div className="current-ticket__grid current-ticket__grid--body">
        <div className="current-ticket__row">
          <ul className="current-ticket__numbers">
            {digits.map((digit, index) => (
              <DrawHistoryCurrentTicketNumber
                key={index}
                digit={digit}
              />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default DrawHistoryCurrentTicket;
