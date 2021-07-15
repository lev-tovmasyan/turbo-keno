import React from 'react';

function HistoryTabButton(props) {

  const {active, name, clickHandler} = props;

  return (
    <button type="button" className={`game-grid__history-bet-tab ${active}`} id={name} onClick={clickHandler}>
			<span className="game-grid__history-bet-tab-text" id={name}>
				{name}
			</span>
    </button>
  );
}

export default HistoryTabButton;