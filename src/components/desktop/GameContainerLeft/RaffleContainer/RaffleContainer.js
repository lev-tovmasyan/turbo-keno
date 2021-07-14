import React, {useEffect, useState} from "react";
import images from "../../../assets/images";
import RaffleBoard from "./RaffleBoard";
import {connect} from "react-redux";
import {
  showBall,
  hideRaffle,
  setPulledDigit,
  resetPulledDigits
} from '../../../redux/actions/raffleActions';
import {getGameData,getUserData} from '../../../redux/actions/dataActions';
import {getKenoType} from '../../../helpers/game';
import {setCongrats} from "../../../redux/actions/congratsAction";

const congratsWinsText='Congratulations to the winners!'

const TIMEOUT_AFTER_DIGITS_PULL = 2000;
const TIMEOUT_AFTER_CONGRATS = 3000;
const DIGIT_PULL_TIMEOUT = 1000;
const PULL_DIGIT_COUNT = 20;
export const raffleDuration = (DIGIT_PULL_TIMEOUT * PULL_DIGIT_COUNT + TIMEOUT_AFTER_CONGRATS + TIMEOUT_AFTER_DIGITS_PULL) / 1000;
let intervalIds = [];

const RaffleContainer = ({showBall, hideRaffle, raffleBalls, getGameData,getUserData, pulledDigits, setPulledDigit, resetPulledDigits, setCongrats, isCongratsTime}) => {
  const [bigDigit, setBigDigit] = useState('');


  useEffect(() => {
    (async function () {
      await pullBalls();
      await waiting(TIMEOUT_AFTER_DIGITS_PULL);
      setCongrats(true);
      showBall('');
      await waiting(TIMEOUT_AFTER_CONGRATS);
      setCongrats(false);
      hideRaffle();
      resetPulledDigits();
      getGameData(getKenoType());
      getUserData(getKenoType());
    })();

    return () => {
      intervalIds.forEach((id) => clearInterval(id));
      intervalIds = [];
    };
  }, [raffleBalls]);

  return (
    <div className="game-grid__raffle-states">
      <div className={`game-grid__raffle-state`}>
        <img className="game-grid__raffle-game-keno-text" src={images.keno_text}
             alt="images keno"
             width="319" height="161"/>
      </div>

      <RaffleBoard bigDigit={bigDigit} digits={pulledDigits} isVisible={!isCongratsTime}/>

      <div className={`game-grid__raffle-state  game-grid__raffle-state--congratulations ${isCongratsTime ? 'active' : ''} `}>
        <p>
          {congratsWinsText}
        </p>
      </div>
    </div>
  );

  function pullBalls() {
    return new Promise((resolve) => {
      const tempDigits = [...raffleBalls];

      const id = setInterval(() => {
        const pulledDigit = tempDigits.shift();
        const isGameFinished = !tempDigits.length;
        showBall(pulledDigit);

        setBigDigit((prevBigDigit) => {
          !!prevBigDigit &&
          setPulledDigit(prevBigDigit);
          return pulledDigit;
        });

        if (isGameFinished) {
          waiting(DIGIT_PULL_TIMEOUT).then(() => {
            setPulledDigit(pulledDigit);
            setBigDigit('');
            resolve();
          });
          clearInterval(id);
        }
      }, DIGIT_PULL_TIMEOUT);
      intervalIds.push(id);
    });
  }
};

function waiting(ms) {
  return new Promise(resolve => {
    const id = setTimeout(() => resolve(), ms);
    intervalIds.push(id);
  });
}

const mapStateToProps = ({drawHistoryReducer, raffleInfoReducer: {digits}, pulledDigitsReducer, isCongratsTime}) => ({
  drawHistoryReducer, raffleBalls: digits, pulledDigits: pulledDigitsReducer, isCongratsTime
});

const mapDispatchToProps = {
  showBall,
  hideRaffle,
  getGameData,
  getUserData,
  setPulledDigit,
  resetPulledDigits,
  setCongrats
};

export default connect(mapStateToProps, mapDispatchToProps)(RaffleContainer);
