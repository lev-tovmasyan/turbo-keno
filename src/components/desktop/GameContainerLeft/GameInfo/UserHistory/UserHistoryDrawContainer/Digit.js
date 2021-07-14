import React from "react";

const Digit = ({digit, isDigitWon}) => {

  return (
    <li className="current-ticket__number">
      {
        digit
          ? <div className={`current-ticket__number-text ${isDigitWon ? 'win' : null}`}>
            <div className="current-ticket__number-text-wrapper">
              {digit}
            </div>
          </div>
          : ''
      }
    </li>
  );
};

export default Digit;