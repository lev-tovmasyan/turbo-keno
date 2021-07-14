import React from 'react';
import TicketHeader from './TicketHeader';
import TicketBody from './TicketBody';

const Ticket = ({ticket, number, ballFrequency, pulledDigits}) => {

  const {date, betMoney, coefficient, digits, ticketStatus, wonMoney} = ticket;

  return (
    <li className="current-ticket">
      <TicketHeader date={date} amount={betMoney} coefficient={coefficient} number={number}
                    ticketStatus={ticketStatus} wonMoney={wonMoney}
      />
      <TicketBody digits={digits} ballFrequency={ballFrequency} pulledDigits={pulledDigits}/>
    </li>
  );
};

export default Ticket;
