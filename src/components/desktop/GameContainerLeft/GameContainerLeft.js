import React from "react";
import RaffleContainer from "./RaffleContainer/RaffleContainer";
import GameInfo from "./GameInfo/GameInfo";
import {connect} from 'react-redux';

const GameContainerLeft = ({isRaffleActive}) => {

  return (
    <div className="game-grid__container game-grid__container--left left-width">
      {
        isRaffleActive
          ? <RaffleContainer/>
          : <p style={{height: '79px'}}></p>
      }
      <GameInfo/>
    </div>
  );
};

const mapStateToProps = ({isRaffleActive}) => ({
  isRaffleActive
});

export default connect(mapStateToProps)(GameContainerLeft);