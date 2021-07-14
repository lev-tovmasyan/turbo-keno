import React from 'react';
import {connect} from 'react-redux';
import DrawHistoryCurrentTicket from "./DrawHistoryCurrentTicket";

function DrawHistory({drawHistoryTickets}) {
  return (
    <li className="game-grid__info-container active">
      <ul className="current-tickets current-tickets--draw-history">
        {drawHistoryTickets.map((ticket, index) => (
          <DrawHistoryCurrentTicket
            key={index}
            id={ticket.id}
            digits={ticket.digits.sort((a, b) => a - b)}
            dt={ticket.dt}
          />
        ))}
      </ul>
    </li>
  );
}

const mapStateToProps = ({drawHistoryReducer}) => ({
  drawHistoryTickets: drawHistoryReducer
});

export default connect(mapStateToProps)(DrawHistory);