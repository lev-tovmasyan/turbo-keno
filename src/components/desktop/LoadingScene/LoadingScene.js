import React, {useEffect} from "react";
import { IMAGES } from '../../../assets/images'
import { useDispatch, useSelector } from 'react-redux';
import { GAME_TYPES } from "../../../constants/names";
import { setConfigs } from "../../../redux/ducks/configsDuck";
import { getGameVersions } from "../../../redux/thunks";

const { KENO, NUMBERS } = GAME_TYPES

const LoadingScene = () => {

  const gameType = useSelector(state => state.configs.gameType)
  const dispatch = useDispatch()

  useEffect(() => {
    storeCredentials(dispatch);
    dispatch(getGameVersions())
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

  function storeCredentials() {
    const [, , language = 'en', token, urlGameType = KENO] = window.location.pathname.split('/');
    localStorage.setItem('UIToken', token);
    localStorage.setItem('UILanguage', language);
    const gameType = urlGameType.toLowerCase() === NUMBERS ? NUMBERS : KENO
    const data = {
      language,
      gameType
    }
    dispatch(setConfigs(data))
  };
};

export default LoadingScene;