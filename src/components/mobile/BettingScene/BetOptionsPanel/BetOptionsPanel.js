import React from 'react';
import RandomChoice from './RandomChoice/RandomChoice';
import BetAmountSelector from '../BetAmountSelector';
import OkButton from './OkButton';

function BetOptionsPanel() {
  return (
    <div className="game-grid__keno-game-config">
      <RandomChoice/>
      <BetAmountSelector/>
      <OkButton/>
    </div>
  );
}

export default BetOptionsPanel;