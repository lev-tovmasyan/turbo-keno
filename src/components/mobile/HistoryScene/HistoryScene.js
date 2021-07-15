import React, {useState, useRef} from 'react';
import DrawHistory from './DrawHistory';
import UserHistory from './UserHistory/UserHistory';
import HistoryTabButton from './HistoryTabButton';

const HISTORY_TABS = {
  DRAW_HISTORY: 'Draw history',
  MY_HISTORY: 'My history',
};

export default function HistoryScene() {
  const {DRAW_HISTORY, MY_HISTORY} = HISTORY_TABS;

  const [tabName, setTabName] = useState(DRAW_HISTORY);
  const refContainer = useRef(null);

  const currentTab = tabName === DRAW_HISTORY ?
    <DrawHistory/> :
    <UserHistory scrollableTarget={refContainer.current}/>;

  return (
    <div ref={refContainer} className="game-grid__container active-overflow">
      <div className="game-grid__history-bet-header">
        <HistoryTabButton name={DRAW_HISTORY}
                          active={changeActivity(tabName, DRAW_HISTORY)}
                          clickHandler={tabClickHandler}/>
        <HistoryTabButton name={MY_HISTORY}
                          active={changeActivity(tabName, MY_HISTORY)}
                          clickHandler={tabClickHandler}/>
      </div>
      {currentTab}
    </div>
  );

  function tabClickHandler(event) {
    const tabName = event.target.id;
    setTabName(tabName);
  }
}

function changeActivity(tabName, buttonTabName) {
  return tabName === buttonTabName ? 'active' : '';
}