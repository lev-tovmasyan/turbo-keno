import React from "react";
import {connect} from 'react-redux';
import {selectTab} from '../../../redux/actions/activeTabActions';

const Tab = ({tabName, activeTab, selectTab}) => {

  const [containerName, className] = tabName;

  return (
    <li className="game-grid__info-tab">
            <span
              className={
                activeTab === containerName
                  ? `game-grid__info-link game-grid__info-link--${className} active`
                  : `game-grid__info-link game-grid__info-link--${className}`
              }
              onClick={handleOnTabClick}
            >
                {containerName}
            </span>
    </li>
  );

  function handleOnTabClick() {
    selectTab(containerName);
  }
};

const mapDispatchToProps = {
  selectTab
};

export default connect(null, mapDispatchToProps)(Tab);