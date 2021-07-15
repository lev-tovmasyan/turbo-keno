import React from 'react';
import {connect} from "react-redux";
import TopPlacesLeaderboard from './TopPlacesLeaderboard';
import LeaderboardList from './LeaderboardList';

function LeaderboardScene({gameLeaderboard}) {
    const {list} = gameLeaderboard;
    return (
        <div className="game-grid__container">
            <TopPlacesLeaderboard topPlaces={list}/>
            <LeaderboardList/>
        </div>
    );
}

const mapStateToProps = ({gameLeaderboard}) => ({gameLeaderboard});

export default connect(mapStateToProps)(LeaderboardScene);
