import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import StatDigit from './StatDigit';
import {SIDES} from '../../constants/game';
import { useLanguageData } from '../../Context/LanguageContext';

const FREQUENCY_TYPES = {
  COLD: 'COLD',
  HOT: 'HOT'
};

function StatisticsScene({ballFrequency}) {

  const languageData = useLanguageData()

  const [modifiedFrequency, setModifiedFrequency] = useState([]);
  const [elemsWidth, setElemsWidth] = useState([]);

  useEffect(() => {
    setModifiedFrequency(modifyBallFrequency(ballFrequency));
  }, [ballFrequency]);

  useEffect(() => {
    setTimeout(() => {
      modifiedFrequency.forEach((el, i) => {
        setTimeout(() => {
          setElemsWidth(prevState => [...prevState, el.width]);
        }, 50 * i + 1);
      });
    });
  }, [modifiedFrequency]);

  return (
    <>
      <div className="game-grid__container active-overflow">
        <div className="statistics__title">
          {languageData['statistics']}
        </div>
        <div className="statistics-grid">
          <div className="statistics-grid__title">
            <div className="statistics-grid__title-left">{languageData['notOften']}</div>
            <div className="statistics-grid__title-right">{languageData['often']}</div>
          </div>
          <div className="statistics-grid__items">
            {modifiedFrequency.map((el, i) => <StatDigit
              digit={el.digit}
              key={el.digit}
              side={el.side}
              width={elemsWidth[i]}/>)}
          </div>
        </div>
      </div>
    </>
  );
}

function modifyBallFrequency(ballFrequency) {
  const coldBalls = Object.entries(ballFrequency.coldBalls).reduce((acc, [digit, frequency]) => {
    acc.push({digit, frequency, side: SIDES.LEFT});
    return acc;
  }, []);

  const hotBalls = (Object.entries(ballFrequency.hotBalls).reduce((acc, [digit, frequency]) => {
    acc.push({digit, frequency, side: SIDES.RIGHT});
    return acc;
  }, []));

  setFrequencyWidth(coldBalls, FREQUENCY_TYPES.COLD);
  setFrequencyWidth(hotBalls, FREQUENCY_TYPES.HOT);

  return hotBalls.concat(coldBalls);
}

function setFrequencyWidth(balls, frequencyType) {
  switch (frequencyType) {
    case FREQUENCY_TYPES.COLD:
      balls.forEach(ball => ball.width = 100 - ball.frequency * 10);
      break;
    case FREQUENCY_TYPES.HOT:
      const max = Math.max(...balls.map(ball => ball.frequency));
      balls.forEach(ball => ball.width = ball.frequency * 100 / max);
      break;
    default:
      throw new Error('wrong frequencyType');
  }
}

const mapStateToProps = ({ballFrequencyReducer}) => ({
  ballFrequency: ballFrequencyReducer,
});

export default connect(mapStateToProps)(StatisticsScene);