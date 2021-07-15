import React from 'react';
import {connect} from 'react-redux';
import Ticket from '../universal/Ticket/Ticket';
import {BALL_COUNTS} from '../../constants/game';

function DrawHistory({drawHistoryTickets}) {

  return (
    <div className="game-grid__history-bet-tickets">
      <div
        className="game-grid__history-bet-tickets-container game-grid__history-bet-tickets-container--draw-history active">
        {drawHistoryTickets.map((ticket) =>
          <Ticket
            key={ticket.id}
            headId={ticket.id}
            digits={ticket.digits.sort((a, b) => a - b)}
            ballCount={BALL_COUNTS.DRAW_TICKET}
          />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({drawHistoryReducer}) => ({
  drawHistoryTickets: drawHistoryReducer
});
export default connect(mapStateToProps)(DrawHistory);