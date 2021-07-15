import React from 'react';
import BetTicketPossibleWin from './BetTicketPossibleWin';
import BetTicketCoincidence from './BetTicketCoincidence';
import BetTicketPayouts from './BetTicketPayouts';
import PropTypes from 'prop-types';

BetTicketOptions.propTypes = {
  coincidence: PropTypes.array.isRequired,
  payouts: PropTypes.array.isRequired,
  possibleWin: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]
  ).isRequired
};

export default function BetTicketOptions({coincidence, payouts, possibleWin}) {

  return (
    <>
      <BetTicketCoincidence coincidence={coincidence}/>
      <BetTicketPayouts payouts={payouts}/>
      <BetTicketPossibleWin possibleWin={possibleWin}/>
    </>
  );
}