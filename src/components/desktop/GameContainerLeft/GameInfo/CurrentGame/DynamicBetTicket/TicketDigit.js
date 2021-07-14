import React from "react";

const TicketDigit = ({digit, color}) => {

  return (
    <li className="current-ticket__number">
      {
        !!digit ? <div className={`current-ticket__number-text ${color}`}>
            <div className="current-ticket__number-text-wrapper">
              {digit}
            </div>
          </div>
          : ''
      }
    </li>
  );
};

export default TicketDigit;