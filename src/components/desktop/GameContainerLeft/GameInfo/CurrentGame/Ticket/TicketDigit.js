import React from "react";
import {useLanguageData} from "../../../../../Context/LanguageContext";
const TicketDigit = ({digit, color, isDigitWon}) => {
  const languageData = useLanguageData()

  return (
    <li className={`current-ticket__number ${isDigitWon ? 'animate-win' : ''}`}>
      {
        digit
          ? <>
            <div className={`current-ticket__number-text ${color} ${isDigitWon ? languageData.win.toLowerCase() : ''}`}>
              <div className="current-ticket__number-text-wrapper">
                {digit}
              </div>
            </div>
            <span className="current-ticket__number-star"/>
            <span className="current-ticket__number-star"/>
            <span className="current-ticket__number-star"/>
            <span className="current-ticket__number-star"/>
          </>
          : ''
      }
    </li>
  );
};

export default TicketDigit;
