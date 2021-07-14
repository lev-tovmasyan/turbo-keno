import React from "react";
import Loader from "./Loader";
import {connect} from 'react-redux';
import {SCENE_NAMES} from "../../../constants/game";
import {getGameData} from '../../../redux/actions/dataActions';

const idText='ID'
const balanceText='Balance'

const {GAME_SCENE} = SCENE_NAMES;

const UserData = ({activeScene, userData, currency}) => {
  const {userId, userBalance} = userData;
  return (
    <div className="header__container left-width">
      <div className="user">
        {activeScene === GAME_SCENE &&
        <>
          <div className="user-amount">{balanceText}: {userBalance} {currency}</div>
          <div className="user-id">{idText}: {userId}</div>
        </>
        }
      </div>
      {activeScene === GAME_SCENE && <Loader/>}
    </div>
  );
};

const mapStateToProps = ({activeScene, userDataReducer, currencyReducer}) => ({
  activeScene,
  userData: userDataReducer,
  currency: currencyReducer
});

const mapDispatchToProps = {
  getGameData,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserData);
