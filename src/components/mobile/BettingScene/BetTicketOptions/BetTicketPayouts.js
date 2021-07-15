import React from 'react';
import PropTypes from 'prop-types';
import { useLanguageData } from '../../../Context/LanguageContext';

BetTicketPayouts.propTypes = {
  payouts: PropTypes.array.isRequired,
};

export default function BetTicketPayouts({payouts}) {

  const languageData = useLanguageData()

  return (
    <div
      className="game-grid__ticket-column game-grid__ticket-column--grid game-grid__ticket-column--grid-second">
      <div className="game-grid__ticket-row game-grid__ticket-row--title">
        <span className="game-grid__ticket-span">{languageData[payouts]}</span>
      </div>
      {payouts.map((el, index) => (
        <div className="game-grid__ticket-row" key={index}>
          <span className="game-grid__ticket-span">x{el}</span>
        </div>
      ))}
    </div>
  );
};
