import React from 'react';
import './App.scss';
// import MenuScene from "./MenuScene/Menuscene";
// import Header from "./Header/Header";
// import GameScene from "./GameScene/GameScene";
import {SCENE_NAMES} from "../../constants/game";
import LoadingScene from "./LoadingScene/LoadingScene";
// import {goToGameScene} from "../redux/actions/activeSceneActions";

const {GAME_SCENE, MENU_SCENE, LOADING_SCENE} = SCENE_NAMES;

function Desktop() {

  return (
    <div className="wrapper wrapper--welcome">
      {/* {
        activeScene === LOADING_SCENE
          ?  */}
          <LoadingScene/>
          {/* : <>
            <Header/>
            {activeScene === GAME_SCENE ? <GameScene/> : <MenuScene/>}
          </>
      } */}
    </div>
  );
}

// const mapStateToProps = ({activeScene, gameVersionsReducer}) => ({
//   activeScene,
//   gameVersions: gameVersionsReducer
// });

// const mapDispatchToProps = {
//   goToGameScene,
// };

export default Desktop;
