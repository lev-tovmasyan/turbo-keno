import React from 'react';
import {SIDES} from '../../constants/game';
import PropTypes from 'prop-types';

StatDigit.propTypes = {
  side: PropTypes.string.isRequired,
  digit: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};

StatDigit.defaultProps = {
  side: SIDES.LEFT,
  width: 0
};

export default function StatDigit({side, digit, width}) {

  return (
    <div className="statistics-grid__item-container">
      <div className="statistics-grid__item">
        <div className="statistics-grid__item-circle">
          <div className="statistics-grid__item-circle-text">{digit}</div>
        </div>
        <div className={`statistics-grid__item-loader ${side}`}>
          <div className="statistics-grid__item-loader-container" style={{width: width + '%'}}/>
        </div>
      </div>
    </div>
  );
}
