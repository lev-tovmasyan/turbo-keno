import React from 'react';
import {goToBettingScene} from '../../redux/actions/sceneActions';
import {connect} from 'react-redux';
import DurationButtons from './DurationButtons';
import images from '../../assets/images';
import MenuTimer from './MenuTimer';
import {getGameData} from '../../redux/actions/dataActions';
import {getKenoType} from '../../helpers/game';

const MenuScene = ({getGameData, goToBettingScene}) => {

  return (
    <div className="game-start game-start--for-background">
      <div className="game-start__image">
        <div className="game-start__image-container">
          <img src={images.keno_wrapper_small} alt="game banner"
               className="game-start__image-img visually-hidden"/>
        </div>
      </div>
      <MenuTimer/>
      <DurationButtons/>
      <div className="game-start__start-game-button-container">
        <span onClick={playClickHandler} className="game-start__start-game-button"> </span>
      </div>
      {/*<div className="game-start__demo-button-container">*/}
      {/*	<span className="game-start__demo-button"> Play Demo </span>*/}
      {/*</div>*/}
    </div>
  );

  function playClickHandler() {
    getGameData(getKenoType());
    goToBettingScene();
  }
};

const mapDispatchToProps = {
  goToBettingScene: () => goToBettingScene,
  getGameData,
};
export default connect(null, mapDispatchToProps)(MenuScene);
