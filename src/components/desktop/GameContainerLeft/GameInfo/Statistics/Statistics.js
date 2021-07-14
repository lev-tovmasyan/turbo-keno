import React from 'react';
import StatisticsNumber from "./StatisticsNumber";
import {connect} from "react-redux";
import {useLanguageData} from "../../../../Context/LanguageContext";

function Statistics({statisticsData}) {
  const languageData = useLanguageData()

  return (
    <li className="game-grid__info-container active">
      <div className="statistics">
        <h2 className="statistics__title">
          {languageData.statistics}
        </h2>
        <div className="statistics__sorts">
          <div className="statistics__sort statistics__sort--blue">
            {languageData.notOften}
          </div>
          <div className="statistics__sort statistics__sort--red">
            {languageData.often}
          </div>
        </div>
        <ul className="statistics__list">
          {modifyBallFrequency(statisticsData).map((number) => (
            <StatisticsNumber
              key={number.digit}
              number={number.digit}
              percent={number.frequency}
              temperature={number.ballTemperature}
            />
          ))}
        </ul>
      </div>
    </li>
  );
}

function modifyBallFrequency(data) {
  const coldBalls = Object.entries(data.coldBalls).reduce((acc, [digit, frequency]) => {
    acc.push({digit, frequency, ballTemperature: 'coldBalls'});

    return acc;
  }, []);

  const hotBalls = (Object.entries(data.hotBalls).reduce((acc, [digit, frequency]) => {
    acc.push({digit, frequency, ballTemperature: 'hotBalls'});

    return acc;
  }, []));

  return hotBalls.concat(coldBalls);

}

const mapStateToProps = ({ballFrequencyReducer}) => ({
  statisticsData: ballFrequencyReducer
});

export default connect(mapStateToProps)(Statistics);
