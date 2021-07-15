import React from 'react';
import PropTypes from 'prop-types';

PopupTabButton.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

function PopupTabButton({name, active, clickHandler}) {

  return (
    <li className="popup__tab-item">
      <button className={`popup__tab-button ${active}`} onClick={clickHandler} id={name}>
        <span className="popup__table-button-text">{name}</span>
      </button>
    </li>
  );
}

export default PopupTabButton;