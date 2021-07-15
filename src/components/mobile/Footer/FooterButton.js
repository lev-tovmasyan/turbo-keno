import React from 'react';
import PropTypes from 'prop-types';

FooterButton.propTypes = {
  active: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired
};

export default function FooterButton({active, clickHandler, icon}) {

  return (
    <li className="game-tabs__item">
      <button className={`game-tabs__button ${active}`} onClick={clickHandler}>
        <img src={icon} alt="play tab"
             className="game-tabs__button-img"/>
      </button>
    </li>
  );
}

