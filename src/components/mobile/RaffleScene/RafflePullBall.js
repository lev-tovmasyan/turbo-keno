import React from 'react';
import PropTypes from 'prop-types';

RafflePullBall.propTypes = {
  digit: PropTypes.string.isRequired,
};

function RafflePullBall({digit}) {

  return (
    <li className="game-grid__raffle-board-pull">
      <div className="game-grid__raffle-board-pull-container">
        <div className="game-grid__raffle-board-pull-text">{digit}</div>
      </div>
    </li>
  );
}

export default RafflePullBall;