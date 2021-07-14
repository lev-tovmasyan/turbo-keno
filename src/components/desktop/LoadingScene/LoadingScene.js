import React, {useEffect} from "react";
import { IMAGES } from '../../../assets/images'
// import {goToGameScene} from "../../redux/actions/activeSceneActions";
// import {getGameVersions} from "../../redux/actions/dataActions";
import {connect, useDispatch, useSelector} from 'react-redux';
import { GAME_TYPES } from "../../../constants/names";
// import { setGameType } from "../../redux/actions/userDataActions";

const { KENO, NUMBERS } = GAME_TYPES

const LoadingScene = ({getGameVersions, gameVersions, goToGameScene}) => {

  // const gameType = useSelector(state => state.gameType)
  const gameType = 'keno'
  const dispatch = useDispatch()

  const storeCredentials = () => {
    const [, , language, token, urlGameType] = window.location.pathname.split('/');
    localStorage.setItem('UIToken', token);
    localStorage.setItem('UILanguage', language);
    // dispatch(setGameType((urlGameType && urlGameType.toLowerCase() === 'numbers') ? NUMBERS : KENO))
  };

  useEffect(() => {
    // storeCredentials();
    // getGameVersions();
  }, []);

  return (
    <main className="game-grid game-grid--welcome" style={{flexDirection: 'column'}}>
      <div className="welcome">
        <div className="welcome__left">
          {gameType && <img src={gameType === NUMBERS ? IMAGES.numbersLogo : IMAGES.keno_wrapper_last} alt="wrapper keno" width="733" height="370"
               className="welcome__keno-img"/>}
        </div>
      </div>
      <div className="loader" style={{width: '500px', flexGrow: 0}}>
        <div className="loader__background">
          <div className="loader__percent"
               style={{animation: `loader 1s linear forwards`, width: '0%'}}
          />
        </div>
      </div>
    </main>
  );
};

// const mapStateToProps = ({gameVersionsReducer}) => ({
//   gameVersions: gameVersionsReducer
// });

// const mapDispatchToProps = {
//   goToGameScene,
//   getGameVersions
// };

export default LoadingScene;