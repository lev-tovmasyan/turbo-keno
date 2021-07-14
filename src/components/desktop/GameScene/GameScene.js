import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import GameContainerLeft from "../GameContainerLeft/GameContainerLeft";
import GameContainerRight from "../GameContainerRight/GameContainerRight";
import {getGameData, getUserData,getGameLeaderboard} from '../../redux/actions/dataActions';
import {getKenoType} from '../../helpers/game';
import {showRaffle} from '../../redux/actions/raffleActions';
import {setFrontSecTillDraw} from '../../redux/actions/frontSecTillDrawAction';
import {setLanguage} from "../../redux/actions/userDataActions";

const GameScene = ({getGameLeaderboard, secTillDraw, showRaffle, getGameData, getUserData, setFrontSecTillDraw, setLanguage}) => {

  useEffect(() => {
    getGameData(getKenoType());
    getUserData(getKenoType());
    getGameLeaderboard();
    const language = localStorage.getItem('UILanguage');
    setLanguage(language)
  }, []);

  useEffect(() => {
    const timerInterval = requestTimer(secTillDraw);

    return () => clearInterval(timerInterval);
  }, [secTillDraw]);

  return (
    <main className="game-grid">
      <div className="container">
        <GameContainerLeft/>
        <GameContainerRight/>
      </div>
    </main>
  );

  function requestTimer(sec) {
    let timerInSeconds = sec;
    const _timerCountDown = () => {
      setFrontSecTillDraw(timerInSeconds);
      timerInSeconds--;
      if (timerInSeconds === 1) {
        getGameData(getKenoType()).then(() => {
          showRaffle();
        });
      }
    };
    return setInterval(() => _timerCountDown(), 1000);
  }
};


const mapStateToProps = ({secTillDrawReducer}) => ({
  secTillDraw: secTillDrawReducer,
});

const mapDispatchToProps = {
  setFrontSecTillDraw,
  getGameData,
  getUserData,
  showRaffle,
  getGameLeaderboard,
  setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScene);
