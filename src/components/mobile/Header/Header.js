import React, {useEffect, useState} from 'react';
import UserData from './UserData';
import HeaderButton from './HeaderButton';
import {HEADER_BTN_TYPES, SCENE_NAMES} from '../../constants/game';
import {connect} from 'react-redux';
import {showPopup} from '../../redux/actions/popupActions';
import {getGameInitialDuration} from '../../helpers/game';
import {COMPUTING_TIME} from "../../constants/game";

function Header({showPopup, secTillDraw, user, sceneReducer}) {
  const {userBalance, userId} = user;
  const {INFO, HOME} = HEADER_BTN_TYPES;
  const [loaderWidth, setLoaderWidth] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(true);
  useEffect(() => {
    const initialTime = getGameInitialDuration();
    const width = (initialTime - secTillDraw) * 100 / initialTime;
    setLoaderWidth(width);
  }, [secTillDraw]);


  return (<header className="game-grid__header">
    <div className="game-grid__header-column game-grid__header-column--config">
      <UserData money={userBalance} id={userId}/>
      <div className="game__config game-grid__header-right">
        <ul className="game-config__list game-gird__header-game-config">
          <HeaderButton type={HOME} clickHandler={onHomeClick}/>
          <HeaderButton type={INFO} clickHandler={onInfoClick}/>
          <HeaderButton type={isFullScreen ? 'full_screen' : 'exit_full_screen'}
                        clickHandler={onFullScreenClick}/>
        </ul>
      </div>
    </div>
    {sceneReducer !== SCENE_NAMES.RAFFLE_SCENE &&
    <div className="game-grid__header-column game-grid__header-column--loader">
      <div className="game-grid__loader">
        <div className="game-grid__loader-container"
             style={{animation: `game-loader ${secTillDraw-COMPUTING_TIME}s linear forwards`, width: loaderWidth + '%'}}
        />
      </div>
    </div>}
  </header>);

  function onInfoClick() {
    showPopup();
  }

  function onHomeClick() {
    window.parent.postMessage({"action":"EGHome","key":"EGKeno","type":"mobile"}, "*");
    window.parent.postMessage("turboKenoRedirectHome","*");
  }

  function onFullScreenClick() {
    let element = document.getElementById('root');
    if (!document.fullscreenElement) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
      setIsFullScreen(!isFullScreen);
    } else {
      document.exitFullscreen();
      setIsFullScreen(!isFullScreen);
    }
  }
}

const mapStateToProps = ({secTillDrawReducer, userReducer, sceneReducer}) => ({
  secTillDraw: secTillDrawReducer,
  user: userReducer,
  sceneReducer,
});


const mapDispatchToProps = {
  showPopup: () => showPopup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
