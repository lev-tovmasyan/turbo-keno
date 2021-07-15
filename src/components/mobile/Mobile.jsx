/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import RaffleScene from './RaffleScene/RaffleScene';
import MenuScene from './MenuScene/MenuScene';
import {SCENE_NAMES} from '../constants/game';
import {connect} from 'react-redux';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import StatisticsScene from './StatisticsScene/StatisticsScene';
import HistoryScene from './HistoryScene/HistoryScene';
import BettingScene from './BettingScene/BettingScene';
import Popup from './Popup/Popup';
import PhoneOrientation from './PhoneOrientation';
import Loading from './Loading/Loading';
import {getGameData, getGameLeaderboard} from '../redux/actions/dataActions';
import './App.css';
import {getGameInitialDuration} from '../helpers/game';
import {goToRaffleScene} from '../redux/actions/sceneActions';
import ErrorsPopup from "./ErrorsPopup/ErrorsPopup";
import {getUserBalance} from "../redux/actions/dataActions";
import LeaderboardScene from './LeaderboardScene/LeaderboardScene';
import LeaderboardPopup from "./Popup/LeaderBoardPopup";
import {setLanguage} from "../redux/actions/userActions";


const {RAFFLE_SCENE, LOADING_SCENE, MENU_SCENE, STATISTICS_SCENE, HISTORY_SCENE, BETTING_SCENE, LEADERBOARD_SCENE} = SCENE_NAMES;

const scenes = {
    [RAFFLE_SCENE]: <RaffleScene/>,
    [MENU_SCENE]: <MenuScene/>,
    [STATISTICS_SCENE]: <StatisticsScene/>,
    [HISTORY_SCENE]: <HistoryScene/>,
    [BETTING_SCENE]: <BettingScene/>,
    [LEADERBOARD_SCENE]: <LeaderboardScene/>
};

const scenesWithoutMarginals = {
    MENU_SCENE, LOADING_SCENE
};

function Mobile({sceneName, getGameData, kenoType, secTillDraw, isLoading, goToRaffleScene, gameVersions, getUserBalance, getGameLeaderboard, setLanguage}) {

    const currentScene = scenes[sceneName];

    useEffect(() => {
        getGameData(kenoType);
        getUserBalance(kenoType);
        getGameLeaderboard()
        const language = localStorage.getItem('UILanguage');
        setLanguage(language)
    }, [kenoType]);

    useEffect(() => {
        const timerInterval = requestTimer(secTillDraw);

        return () => {
            clearInterval(timerInterval);
        };
    }, [secTillDraw]);

    return (
        <>
            <div className="wrapper">
                {isLoading
                    ? <Loading kenoType={kenoType}/>
                    : <>
                        <div className="game-grid">
                            {setMarginal(<Header/>)}
                            {currentScene}
                            {setMarginal(<Footer/>)}
                        </div>
                        <Popup/>
                        <LeaderboardPopup/>
                    </>
                }
                <ErrorsPopup/>
            </div>
            <PhoneOrientation/>
        </>
    );

    function setMarginal(marginal) {
        const isMarginalNeed = !scenesWithoutMarginals[sceneName];
        return isMarginalNeed && marginal;
    }

    function requestTimer(sec) {
        let timerInSeconds = sec;
        const _timerCountDown = () => {
            if (timerInSeconds === 0) {
                getGameData(kenoType);
            }
            if (timerInSeconds < 0) {
                timerInSeconds = getGameInitialDuration();
            }
            if (timerInSeconds <= 0) {
                sceneName !== SCENE_NAMES.MENU_SCENE && goToRaffleScene();
            }
            timerInSeconds--;
        };
        return setInterval(() => _timerCountDown(), 1000);
    }
}

const mapStateToProps = ({sceneReducer, loadingReducer, kenoTypeReducer, secTillDrawReducer, gameVersionsReducer}) => ({
    sceneName: sceneReducer,
    isLoading: loadingReducer,
    kenoType: kenoTypeReducer,
    secTillDraw: secTillDrawReducer,
    gameVersions: gameVersionsReducer
});

const mapDispatchToProps = {
    setLanguage,
    getGameData,
    getGameLeaderboard,
    getUserBalance,
    goToRaffleScene: () => goToRaffleScene
};

export default connect(mapStateToProps, mapDispatchToProps)(Mobile);
