import React from "react";
import {connect} from 'react-redux';
import {goToGameScene} from "../../redux/actions/activeSceneActions";

const playText='Play'

const PlayButton = ({goToGameScene}) => {

  return (
    <div className="welcome__row welcome__row--play-button">
      <span className="welcome__play-game" onClick={goToGameScene}>{playText}</span>
    </div>
  );
};

const mapDispatchToProps = {
  goToGameScene
};

export default connect(null, mapDispatchToProps)(PlayButton);
