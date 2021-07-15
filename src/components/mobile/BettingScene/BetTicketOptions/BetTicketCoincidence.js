import React from 'react';
import PropTypes from 'prop-types';
import { useLanguageData } from '../../../Context/LanguageContext';

BetTicketCoincidence.propTypes = {
  coincidence: PropTypes.array.isRequired
};

export default function BetTicketCoincidence({coincidence}) {

  const languageData = useLanguageData()

  return (
    <div className="game-grid__ticket-column game-grid__ticket-column--grid">
      <div className="game-grid__ticket-row game-grid__ticket-row--title">
        <span className="game-grid__ticket-span">{languageData['coincidences']}</span>
      </div>
      {coincidence.map(el =>
        <div className="game-grid__ticket-row" key={el}>
          <span className="game-grid__ticket-span">{el}</span>
        </div>
      )}
    </div>
  );
}