import React from "react";
import Digit from "./Digit";
import {forMap} from "../../../../../helpers/general";

const TicketDigits = ({digits, winCombination}) => {

  return (
    <ul className="current-ticket__numbers">
      {
        forMap(10, (i) => {
          const isDigitWon = digits[i] in winCombination;
          return <Digit key={i} digit={digits[i] || ''} isDigitWon={isDigitWon}/>;
        })
      }
    </ul>
  );
};

export default TicketDigits;