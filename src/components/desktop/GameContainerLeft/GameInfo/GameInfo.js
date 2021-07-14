import React from "react";
import InfoTabs from "./InfoTabs";
import InfoContainer from "./InfoContainer/InfoContainer";
import {connect} from 'react-redux';

const GameInfo = ({activeTab, gameLeaderboard, ticketReducer}) => {

    return (
        <div className="game-grid__info">
            <InfoTabs activeTab={activeTab} isLeaderboardActive={gameLeaderboard.error}/>
            <InfoContainer activeTab={activeTab} isLeaderboardActive={gameLeaderboard.error} ticketReducer={ticketReducer}/>
        </div>
    );
};

const mapStateToProps = ({gameLeaderboard, selectedTab, ticketReducer}) => ({
    activeTab: selectedTab,
    ticketReducer,
    gameLeaderboard
});

export default connect(mapStateToProps)(GameInfo);