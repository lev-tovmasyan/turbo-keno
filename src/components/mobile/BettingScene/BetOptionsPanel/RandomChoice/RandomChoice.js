import React, {useState} from 'react';
import {forMap} from '../../../../helpers/general';
import RandomDigit from './RandomDigit';
import OpenRandomBtn from './OpenRandomBtn';
import OpenRandomArrowBtn from './OpenRandomArrowBtn';

export default function RandomChoice() {
  const [isOpened, setOpen] = useState(false);
  const RAND_NUM_COUNT = 10;

  return (
    <div className="game-grid__keno-game-config-button-container--random">
      <div className={`game-grid__keno-game-random-button-container${isOpened ? ' active' : ''}`}>
        <OpenRandomBtn clickHandler={clickHandler}/>
        <ul className="game-grid__keno-game-random-button-variant-list">
          {forMap(RAND_NUM_COUNT, (index) => <RandomDigit digit={index + 1} key={index}/>)}
        </ul>
        <OpenRandomArrowBtn clickHandler={clickHandler}/>
      </div>
    </div>
  );

  function clickHandler() {
    setOpen(!isOpened);
  }
}