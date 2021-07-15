import React from 'react';
import {connect} from 'react-redux';
import images from '../../../../assets/images';
import PropTypes from 'prop-types';
import {generateRandomDigits} from "../../../../helpers/game";
import {addRandomBetBtns} from "../../../../redux/actions/betBtnActions";


OpenRandomBtn.propsTypes = {
  clickHandler: PropTypes.func.isRequired
};

function OpenRandomBtn({betBtnsReducer, addRandomBetBtns}) {

  const handleRandomChoice = () => {
    const btnCount = betBtnsReducer.length;
    addRandomBetBtns(generateRandomDigits(btnCount));
  };

  return (
    <button className="game-grid__keno-random-button game-grid__keno-random-button--random"
            onClick={handleRandomChoice}>
      <img className="game-grid__keno-random-button-random-first"
           src={images.random_original}
           alt="random button decoration"/>
    </button>
  );
}

const mapStateToProps = ({betBtnsReducer}) => ({
  betBtnsReducer
});

const mapDispatchToProps = {
  addRandomBetBtns
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenRandomBtn);