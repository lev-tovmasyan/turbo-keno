import React from "react";
import RafflePullBall from "./RafflePullBall";

const RaffleBoard = ({digits, bigDigit, isVisible}) => {
  return (
    <div className={`game-grid__raffle-state game-grid__raffle-state--raffle ${isVisible ? 'active' : 'end'}`}>
      {!bigDigit ?
        <div style={{height: '93px', width: '52px'}}/> :
        <div className="game-grid__raffle-pool-select" style={{visibility: !bigDigit ? 'hidden' : 'visible'}}>
          {bigDigit}
        </div>}
      <ul className="game-grid__raffle-pools">
        {
          digits.map((ball) => {
            return <RafflePullBall key={ball} ball={ball}/>;
          })
        }
      </ul>
    </div>
  );
};

export default RaffleBoard;