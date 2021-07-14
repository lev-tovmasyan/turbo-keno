import React from "react";
import {connect} from 'react-redux';
import {addRandomBetBtns} from "../../../redux/actions/betBtnActions";
import {generateRandomDigits} from "../../../helpers/game";

const RandomDigit = ({digit, addRandomBetBtns}) => {

  const handleRandomChoice = () => {
    addRandomBetBtns(generateRandomDigits(digit));
  };

  return (
    <li className="random-button-container">
      <button className="random-button" value={digit} onClick={handleRandomChoice}>{digit}</button>
    </li>
  );
};

const mapDispatchToProps = {
  addRandomBetBtns
};

export default connect(null, mapDispatchToProps)(RandomDigit);