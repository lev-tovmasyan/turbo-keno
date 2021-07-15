import React, {useEffect} from 'react';
import images from '../../assets/images';
import PropTypes from 'prop-types';
import {connect, useDispatch, useSelector} from 'react-redux';
import { GAME_TYPES } from '../../constants/names';
import { setGameType } from '../../redux/actions/userActions';

const { KENO, NUMBERS } = GAME_TYPES

Loading.propTypes = {
  kenoType: PropTypes.string.isRequired,
  information: PropTypes.string,
};

function Loading({kenoType, information, gameVersions}) {

  const dispatch = useDispatch()
  const gameType = useSelector(state => state.gameType)

  const storeCredentials = () => {
    const [, , language, token, urlGameType] = window.location.pathname.split('/');
    localStorage.setItem('UIToken', token);
    localStorage.setItem('UILanguage', language);
    dispatch(setGameType((urlGameType && urlGameType.toLowerCase() === 'numbers') ? NUMBERS : KENO))
  };

  useEffect(() => {
    storeCredentials();
  }, []);

  return (
    <div className={`game-loading-container ${gameType && (gameType === NUMBERS 
    ? "game-start--background-numbers" : 'game-start--for-background')}`}>
      <div className="game-start__image game-start__image--load-container">
        <div className="game-start__image-container">
          <img src={images.keno_wrapper_small} alt="game banner"
               className="game-start__image-img visually-hidden"/>
        </div>
      </div>
      {
        gameVersions.length
          ? <>
            <div className="game-loading-container__about-time">
              {kenoType + ' minute'}
            </div>
            <div className="game-loading-container__loader-icon">
              <div className="game-loading-container__loader-icon-svg">
                <svg x="0px" y="0px" viewBox="0 0 103.5 103">
                  <path d="M51.8,103C23.4,103,0.3,79.9,0.3,51.5S23.4,0,51.8,0c6.9,0,13.7,1.4,20,4c3.6,1.5,5.2,5.6,3.7,9.2
                        c-1.5,3.6-5.6,5.2-9.2,3.7c-4.6-2-9.5-2.9-14.6-2.9c-20.7,0-37.5,16.8-37.5,37.5S31.1,89,51.8,89c20.7,0,37.5-16.8,37.5-37.5
                        c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7C103.3,79.9,80.2,103,51.8,103z"/>
                </svg>
              </div>
            </div>
            <div className="game-loading-container__loader-text">
              Loading
            </div>
            <div className="game-loading-container__information-creator">
              {information}
            </div>
          </>
          : <div className="loader" style={{width: '200px', flexGrow: 0, marginTop: '200px'}}>
            <div className="loader__background">
              <div className="loader__percent"
                   style={{animation: `loader 1s linear forwards`, width: 0 + '%'}}
              />
            </div>
          </div>
      }
    </div>
  );
}

const mapStateToProps = ({gameVersionsReducer}) => ({
  gameVersions: gameVersionsReducer
});

export default connect(mapStateToProps)(Loading);