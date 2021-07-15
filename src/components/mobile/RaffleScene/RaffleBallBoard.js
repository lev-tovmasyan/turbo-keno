import React from 'react';
import RafflePullBigBall from './RafflePullBigBall';
import RafflePullBall from './RafflePullBall';
import PropTypes from 'prop-types';
import { useLanguageData } from '../../Context/LanguageContext';

RaffleBallBoard.propTypes = {
  bigDigit: PropTypes.string.isRequired,
  digits: PropTypes.array.isRequired,
};

function RaffleBallBoard({bigDigit, digits}) {
  const languageData = useLanguageData()

  return (
    <>
      {<RafflePullBigBall digit={bigDigit}/>}
      <ul className="game-grid__raffle-board-pulls">
        {digits.map((digit) => !!digit && <RafflePullBall digit={digit} key={digit}/>)}
      </ul>
      <div className="game-grid__raffle-congratulations-text">
        {languageData['congratsWins']}
      </div>
    </>
  );
}

export default RaffleBallBoard;