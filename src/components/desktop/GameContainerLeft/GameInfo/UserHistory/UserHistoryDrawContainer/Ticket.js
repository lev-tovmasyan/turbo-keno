import React from "react";
import TicketHeader from "./TicketHeader";
import TicketBody from "./TicketBody";
import {getTimeFromIso} from "../../../../../constants/game";

const Ticket = ({ticket, number}) => {
  const {ticketStatus, date, betMoney, wonMoney, digits, winCombination, currency} = ticket;
  const time = getTimeFromIso(date);
  return (
    <li className={`current-ticket ${ticketStatus === 'won' ? 'win' : null}`}>
      <TicketHeader time={time} betMoney={betMoney} wonMoney={wonMoney} number={number} currency={currency} digits={digits}/>
      <TicketBody wonMoney={wonMoney} ticketStatus={ticketStatus} digits={digits.sort((a, b) => a - b)}
                  winCombination={winCombination}/>
    </li>
  );
};

export default Ticket;
