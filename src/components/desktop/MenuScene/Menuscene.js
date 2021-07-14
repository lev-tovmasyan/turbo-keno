import React from "react";
import images from '../../assets/images';
import DurationButton from './DurationButton';
import {KENO_TYPES} from '../../constants/game';
import PlayButton from './PlayButton';
import {connect} from 'react-redux';

const MenuScene = ({gameVersions}) => {

  return (
    <>
      <main className="game-grid game-grid--welcome">
        <div className="welcome">
          <div className="welcome__left">
            <img src={images.keno_wrapper_last} alt="wrapper keno" width="733" height="370"
                 className="welcome__keno-img"/>
          </div>
          <div className="welcome__right">
            <div className="welcome__row welcome__row--inputs">
              {
                gameVersions.map(version => {
                  return (
                    <DurationButton key={version} duration={+version}/>
                  );
                })
              }
            </div>
            <PlayButton/>
          </div>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = ({gameVersionsReducer}) => ({
  gameVersions: gameVersionsReducer
});

export default connect(mapStateToProps)(MenuScene);