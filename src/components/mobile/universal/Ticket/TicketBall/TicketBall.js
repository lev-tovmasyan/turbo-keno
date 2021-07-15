import React from 'react';
import WinningStars from './WinningStars';
import PropTypes from 'prop-types';

TicketBall.propTypes = {
  isDigitWon: PropTypes.bool.isRequired,
  withStars: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  digit: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};

TicketBall.defaultProps = {
  digit: '',
  isDigitWon: false,
  withStars: false,
  color: ''
};

export default function TicketBall({digit, isDigitWon, withStars, color}) {

  return (
    <li className={`game-grid__ticket-selected ${isDigitWon && !!digit ? 'win' : ''} 
		    ${withStars && isDigitWon && !!digit ? 'animate-win' : ''} ${color}`}
    >
      {withStars && !!digit && <WinningStars/>}
      <span className="game-grid__ticket-selected-number">
				<span className="game-grid__ticket-selected-number-text">
					{digit}
				</span>
			</span>
    </li>
  );
}