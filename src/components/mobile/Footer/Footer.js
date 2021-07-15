import React from 'react';
import images from '../../assets/images';
import {
    goToBettingScene,
    goToHistoryScene, goToLeaderboardScene,
    goToStatisticsScene
} from '../../redux/actions/sceneActions';
import {connect} from 'react-redux';
import FooterButton from './FooterButton';
import {SCENE_NAMES} from '../../constants/game';

const {BETTING_SCENE, HISTORY_SCENE, STATISTICS_SCENE, LEADERBOARD_SCENE} = SCENE_NAMES;

function Footer({sceneName, goToBettingScene, goToHistoryScene, goToStatisticsScene, goToLeaderboardScene, gameLeaderboard}) {

    return (
        <footer className="game-grid__footer">
            <ul className="game-grid__footer-tab game-tabs">
                <FooterButton
                    icon={images.play_game}
                    active={changeActivity(sceneName, BETTING_SCENE)}
                    clickHandler={goToBettingScene}
                />
                <FooterButton
                    icon={images.time}
                    active={changeActivity(sceneName, HISTORY_SCENE)}
                    clickHandler={goToHistoryScene}
                />
                <FooterButton
                    icon={images.statistics}
                    active={changeActivity(sceneName, STATISTICS_SCENE)}
                    clickHandler={goToStatisticsScene}
                />
                {!gameLeaderboard.error && <FooterButton
                    icon={images.big_Leaderboard}
                    active={changeActivity(sceneName, LEADERBOARD_SCENE)}
                    clickHandler={goToLeaderboardScene}
                />}
            </ul>
        </footer>
    );
}

function changeActivity(sceneName, buttonScene) {
    return sceneName === buttonScene ? 'active' : '';
}

const mapDispatchToProps = {
    goToBettingScene: () => goToBettingScene,
    goToHistoryScene: () => goToHistoryScene,
    goToStatisticsScene: () => goToStatisticsScene,
    goToLeaderboardScene: () => goToLeaderboardScene
};

const mapStateToProps = ({sceneReducer, gameLeaderboard}) => ({
    sceneName: sceneReducer,
    gameLeaderboard,
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);