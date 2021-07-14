import React from "react";
import TicketDigits from "./TicketDigits";
import TicketOdds from "./TicketOdds";

const TicketBody = ({ticketStatus, wonMoney, winCombination, digits}) => {

  return (
    <div className="current-ticket__grid current-ticket__grid--body">
      <div className="current-ticket__row">
        <TicketDigits winCombination={winCombination} digits={digits}/>
      </div>
      <TicketOdds ticketStatus={ticketStatus} wonMoney={wonMoney}/>
    </div>
  );
};

export default TicketBody;
