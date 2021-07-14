import React from "react";
import {forMap} from "../../../../../helpers/general";
import TicketDigit from "./TicketDigit";
import {getTicketBallColor} from '../../../../../helpers/game';

const TicketRow = ({selectedBetBtns, ballFrequency}) => {

  return (
    <div className="current-ticket__row">
      <ul className="current-ticket__numbers">
        {
          forMap(10, (i) => {
            const digit = selectedBetBtns[i];
            const color = getTicketBallColor(ballFrequency, digit);
            return <TicketDigit key={i} digit={digit} color={color}/>;
          })
        }
      </ul>
    </div>
  );
};

export default TicketRow;