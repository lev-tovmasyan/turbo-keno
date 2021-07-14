import React from "react";
import {forMap} from '../../../../../helpers/general';
import {getTicketBallColor} from '../../../../../helpers/game';
import TicketDigit from './TicketDigit';
import TicketStatus from './TicketStatus';

const TicketBody = ({digits, ballFrequency, pulledDigits}) => {
  return (
    <div className="current-ticket__grid current-ticket__grid--body">
      <div className="current-ticket__row">
        <ul className="current-ticket__numbers">
          {
            forMap(10, (i) => {
              const digit = digits[i];
              const color = getTicketBallColor(ballFrequency, digit);
              return <TicketDigit key={i} digit={digit} color={color}
                                  isDigitWon={!!pulledDigits && !!digit && pulledDigits.includes(digit.toString())}/>;
            })
          }
        </ul>
      </div>
      <TicketStatus/>
    </div>
  );
};

export default TicketBody;