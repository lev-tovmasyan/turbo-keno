import React from 'react';
import PropTypes from 'prop-types';
import { useLanguageData } from '../../../../Context/LanguageContext';

UserHistoryDrawContainer.propTypes = {
  gameId: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element)
};

UserHistoryDrawContainer.defaultProps = {
  gameId: ''
};

function UserHistoryDrawContainer({gameId, children}) {

  const languageData = useLanguageData()

  return (
    <div className="game-grid__ticket-container-add-id">
      <div className="ticket-id-container">
        <span className="ticket-id-container-circle"/>
        <span className="ticket-id-container-text">{languageData['ID']}: {gameId}</span>
      </div>
      {children}
    </div>
  );
}

export default UserHistoryDrawContainer;