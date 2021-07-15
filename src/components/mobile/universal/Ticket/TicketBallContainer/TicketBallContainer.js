import React from 'react';
import TicketDelButton from './TicketDelButton';
import PropTypes from 'prop-types';

TicketBallContainer.propTypes = {
  isDelBtnNeed: PropTypes.bool.isRequired,
  children: PropTypes.array.isRequired
};

TicketBallContainer.defaultProps = {
  isDelBtnNeed: false
};

export default function TicketBallContainer({isDelBtnNeed, children}) {

  return (
    <div className="game-grid__ticket-column game-grid__ticket-column--selected-numbers">
      <ul className="game-grid__ticket-selected-numbers game-grid__ticket-selected-numbers--choose-number">
        {children}
      </ul>
      {isDelBtnNeed && <TicketDelButton/>}
    </div>
  );
};

