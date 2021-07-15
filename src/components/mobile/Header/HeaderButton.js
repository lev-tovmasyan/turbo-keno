import React from 'react';
import images from '../../assets/images';
import PropTypes from 'prop-types';

HeaderButton.propTypes = {
  type: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

function HeaderButton({type, clickHandler}) {
  return (
    <li className="game-config__item">
      <button className={`game-config__button game-config__button--${type}`} onClick={clickHandler}>
        <img src={images[type]} alt="icon home button"
             className={`game-config__button--${type}-img`}/>
      </button>
    </li>
  );
}

export default HeaderButton;
