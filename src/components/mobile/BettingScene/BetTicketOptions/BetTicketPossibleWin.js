import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

BetTicketPossibleWin.propTypes = {
  possibleWin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};

function BetTicketPossibleWin({possibleWin, currency, betAmountOptionReducer}) {

  const {maxWin} = betAmountOptionReducer;

  return (
    <div className="game-grid__possible-winning-container">
      <span className="game-grid__possible-winning-text">Possible win</span>
      <span className="game-grid__possible-winning-amount">{(possibleWin > maxWin ? maxWin : possibleWin) || 0} {currency}</span>
    </div>
  );
}

const mapStateToProps = ({currencyReducer, betAmountOptionReducer}) => ({
  currency: currencyReducer,
  betAmountOptionReducer
});

export default connect(mapStateToProps)(BetTicketPossibleWin);