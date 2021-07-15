import React from 'react';
import {connect} from 'react-redux';
import {floodButtons} from '../../../../redux/actions/betBtnActions';
import PropTypes from 'prop-types';

RandomDigit.propTypes = {
  digit: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired
};

function RandomDigit({digit, floodButtons}) {

  return (
    <li className="game-grid__keno-game-random-button-variant-item" onClick={clickHandler}>
      <div className="game-grid__keno-game-random-button-variant-item-text">{digit}</div>
    </li>
  );

  function clickHandler() {
    const randomNumbers = generateRandomNumbers();
    floodButtons(randomNumbers);
  }

  function generateRandomNumbers() {
    const randomSet = new Set();
    while (randomSet.size < digit) {
      randomSet.add(Math.floor(Math.random() * 80) + 1);
    }

    return [...randomSet];
  }
}

const mapDispatchToProps = {
  floodButtons,
};
export default connect(null, mapDispatchToProps)(RandomDigit);