import React from 'react';
import PropTypes from 'prop-types';

RafflePullBigBall.propTypes = {
  digit: PropTypes.string.isRequired,
};

function RafflePullBigBall({digit}) {

  return (
    <div className="game-grid__raffle-board-big-pull" style={{visibility: !digit ? 'hidden' : 'visible'}}>
      <div className="game-grid__raffle-board-big-pull-container">
        <div className="game-grid__raffle-board-big-pull-text">{digit}</div>
      </div>
    </div>
  );
}

export default RafflePullBigBall;