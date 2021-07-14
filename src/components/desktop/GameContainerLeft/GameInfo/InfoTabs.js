import React from "react";
import Tab from "./Tab";
import {tabNames} from "../../../constants/game";

const InfoTabs = ({activeTab, isLeaderboardActive}) => {

    return (
        <ul className="game-grid__info-tabs">
            {
                Object.entries(tabNames).map((tabName, index) => {
                    if (tabName[0] !== 'Leaderboard') {
                        return (
                            <Tab key={index} tabName={tabName} activeTab={activeTab}/>
                        );
                    } else if (tabName[0] === 'Leaderboard' && !isLeaderboardActive){
                        return (
                            <Tab key={index} tabName={tabName} activeTab={activeTab}/>
                        );
                    }

                })
            }
        </ul>
    );
};

export default InfoTabs;