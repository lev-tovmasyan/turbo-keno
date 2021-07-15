import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useTimer} from '../../hooks/useTimer';

function MenuTimer({secTillDraw}) {
  const [timerText, setTimerText] = useState('');
  const {timerCount, startTimer, resetTimer, stopTimer} = useTimer(secTillDraw, 1000, true);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [secTillDraw]);

  useEffect(() => {
    setTimerText(createTimerText(timerCount));
    timerCount <= 0 && resetTimer();
  }, [timerCount]);

  return (
    <div className="game-start__time">
      {!!timerCount ? timerText : ':'}
    </div>
  );
}

export function createTimerText(sec) {

  let timerInSeconds = sec;
  const minutes = '0' + Math.floor(timerInSeconds / 60);
  const seconds = '0' + Math.floor(timerInSeconds % 60);
  return `${minutes.slice(-2)} : ${seconds.slice(-2)}`;

}

const mapStateToProps = ({secTillDrawReducer}) => ({
  secTillDraw: secTillDrawReducer
});

export default connect(mapStateToProps)(MenuTimer);