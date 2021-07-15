import React from 'react';
import BetButtonGrid from './BetButtonGrid/BetButtonGrid';
import BetOptionsPanel from './BetOptionsPanel/BetOptionsPanel';
import TicketBoard from './BetTicketBoard';

export default function BettingScene() {
  return (
    <div className="game-grid__container">
      <TicketBoard/>
      <BetButtonGrid/>
      <BetOptionsPanel/>
    </div>
  );
};