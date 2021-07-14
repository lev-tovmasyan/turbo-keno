import React from 'react';
import {connect} from 'react-redux';
import {
  addBetButton, addGroupBetButton, deleteBetButton, deleteGroupBetButton
} from '../../redux/actions/betBtnActions';
import {BALL_COUNTS, digitsWithoutGroupBtn} from '../../constants/game';

const BetButton = ({digit, color, addBetButton, addGroupBetButton, deleteGroupBetButton, selectedBetBtns, deleteBetButton}) => {

  const isActive = selectedBetBtns.includes(digit);
  const groupDigits = [digit, digit + 1, digit + 10, digit + 11];

  const handleClick = (digit) => {
    if (isActive) {
      deleteBetButton(digit);
    } else {
      selectedBetBtns.length < BALL_COUNTS.USER_TICKET && addBetButton(digit);
    }
  };

  const handleGroupClick = (groupDigits) => {
    const intersection = groupDigits.filter(element => !selectedBetBtns.includes(element));
    const intLen = intersection.length;
    const remainingBalls = selectedBetBtns.filter(element => !groupDigits.includes(element));
    if (intLen > 0 && selectedBetBtns.length + intLen <= 10) {
      addGroupBetButton(intersection);
    } else {
      intLen === 0 && deleteGroupBetButton(remainingBalls);
    }
  };

  return (<li className="bet-number-container">
    <button className={`bet-number-button ${color} ${isActive ? 'active' : ''}`}>
      <span className="bet-number-button__span" onClick={() => handleClick(digit)}>{digit}</span>
    </button>
    {!(digit in digitsWithoutGroupBtn) &&
    <button className="bet-number-select-group" onClick={() => handleGroupClick(groupDigits)}/>}
  </li>);
};

const mapStateToProps = ({selectedBetBtns}) => ({
  selectedBetBtns
});

const mapDispatchToProps = {
  addBetButton, deleteBetButton, addGroupBetButton, deleteGroupBetButton
};

export default connect(mapStateToProps, mapDispatchToProps)(BetButton);