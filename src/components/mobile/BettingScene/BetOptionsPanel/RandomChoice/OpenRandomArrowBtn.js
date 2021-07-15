import React from 'react';
import images from '../../../../assets/images';
import PropTypes from 'prop-types';

OpenRandomArrowBtn.propsTypes = {
  clickHandler: PropTypes.func.isRequired
};

function OpenRandomArrowBtn({clickHandler}) {
  return (
    <button className="game-grid__keno-random-button game-grid__keno-random-button--arrow" onClick={clickHandler}>
      <img className="game-grid__keno-random-button-random-second"
           src={images.arrow}
           alt="random button decoration"/>
    </button>
  );
}

export default OpenRandomArrowBtn;