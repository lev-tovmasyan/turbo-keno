import React from 'react';

const StatisticsNumberNew = ({number, percent, temperature}) => {

  const blueClass = "statistics__rectangle-progress statistics__rectangle-progress--blue";
  const redClass = "statistics__rectangle-progress statistics__rectangle-progress--red";
  const coldPercent = 100 - (percent / 10 * 100);
  const hotPercent = percent / 10 * 100;

  temperature === 'hotBalls' ? percent = hotPercent : percent = coldPercent;

  return (
    <li className="statistics__item">
      <div className="statistics__number-circle">{number}</div>
      <div className={temperature === 'hotBalls' ? redClass : blueClass}>
        <div className="statistics__rectangle-progress-container" style={{width: `${percent}%`}}/>
      </div>
    </li>
  );
};

export default StatisticsNumberNew;