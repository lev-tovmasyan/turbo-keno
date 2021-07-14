import React from "react";
import {forMap} from "../../../helpers/general";
import RandomDigit from "./RandomDigit";
import {connect} from "react-redux";
import {addRandomBetBtns} from "../../../redux/actions/betBtnActions";
import {generateRandomDigits} from "../../../helpers/game";

const RAND_NUM_COUNT = 10;

const RandomChoice = ({selectedBetBtns, addRandomBetBtns}) => {

  const handleRandomChoice = () => {
    const btnCount = selectedBetBtns.length;
    addRandomBetBtns(generateRandomDigits(btnCount));
  };

  return (
    <ul className="random-buttons">
      <li className="random-button-container">
        <button className="random-button random-button--with-icon"
                onClick={handleRandomChoice}>
        </button>
      </li>
      {forMap(RAND_NUM_COUNT, (index) => <RandomDigit digit={index + 1} key={index}/>)}
    </ul>
  );
};

const mapStateToProps = ({selectedBetBtns}) => ({
  selectedBetBtns
});

const mapDispatchToProps = {
  addRandomBetBtns
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomChoice);