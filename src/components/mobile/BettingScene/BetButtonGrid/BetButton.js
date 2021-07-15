import React from 'react';
import {getStoreState} from '../../../redux/store';
import {connect} from 'react-redux';
import {
  addBetButton, deleteBetButton
} from '../../../redux/actions/betBtnActions';
import PropTypes from 'prop-types';

const MAX_CHOICE = 10;

BetButton.propTypes = {
  color: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  digit: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

BetButton.defaultProps = {
  color: '',
};

function BetButton({color, isActive, digit, addBetButton, deleteBetButton}) {

  return (
    <li className="game-grid__keno-bet-button-item">
      <div className="game-grid__keno-bet-button-container">
        <button className={`game-grid__keno-bet-button-button${isActive ? ' active' : ''} ${color}`}
                onClick={handleClick}>
          <span className="game-grid__keno-bet-button__button-text">{digit}</span>
        </button>
      </div>
    </li>
  );

  function handleClick() {
    const {betBtnsReducer: betButtons} = getStoreState();

    if (isActive) {
      deleteBetButton(digit);
    } else {
      betButtons.length < MAX_CHOICE && addBetButton(digit);
    }
  }
}

const mapDispatchToProps = {
  addBetButton,
  deleteBetButton,
};

export default connect(null, mapDispatchToProps)(BetButton);