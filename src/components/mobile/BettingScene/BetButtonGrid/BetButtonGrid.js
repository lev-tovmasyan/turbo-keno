import React from 'react';
import {forMap} from '../../../helpers/general';
import BetButton from './BetButton';
import StarRule from './StarRule';
import {connect} from 'react-redux';
import {getTicketBallColor} from '../../../helpers/game';

const BET_BTNS_COUNT = 80;

function BetButtonGrid({activeButtons, ballFrequency, isNumbersActive}) {

  return (
    <div className={`game-grid__keno-bet-buttons ${isNumbersActive ? '' : 'blur active'}`}>
      <ul className="game-grid__keno-bet-buttons-list">
        {forMap(BET_BTNS_COUNT, (index) => {
          const digit = index + 1;
          const color = getTicketBallColor(ballFrequency, digit);
          const isButtonActive = !!activeButtons.find((btn) => btn === digit);
          return <BetButton digit={digit} key={index} isActive={isButtonActive} color={color}/>;
        })}
      </ul>
      <StarRule/>
    </div>
  );
}

const mapStateToProps = ({betBtnsReducer, ballFrequencyReducer, isNumbersActiveReducer}) => ({
  activeButtons: betBtnsReducer,
  ballFrequency: ballFrequencyReducer,
  isNumbersActive: isNumbersActiveReducer
});

export default connect(mapStateToProps)(BetButtonGrid);
