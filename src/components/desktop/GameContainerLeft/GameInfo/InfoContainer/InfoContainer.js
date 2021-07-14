import React, {useEffect, useState, useRef} from "react";
import CurrentGame from "../CurrentGame/CurrentGame";
import UserHistory from "../UserHistory/UserHistory";
import Statistics from "../Statistics/Statistics";
import DrawHistory from "../DrawHistory/DrawHistory";
import {connect} from 'react-redux';
import {raffleDuration} from '../../RaffleContainer/RaffleContainer';
import LeaderboardList from '../Leaderboard/LeaderboardList';
import TopPlacesLeaderboard from '../Leaderboard/TopPlacesLeaderboard';
import {useLanguageData} from "../../../../Context/LanguageContext";

const InfoContainer = ({isLeaderboardActive, activeTab, isRaffleActive, raffleTickets, gameLeaderboard}) => {
    const languageData = useLanguageData()

    const [timerCount, setTimerCount] = useState(raffleDuration);
    const [timerText, setTimerText] = useState('');
    const isEmpty = activeTab === 'Current Game' && isRaffleActive && !raffleTickets.length;
    const {error, list, playersCurrentPlace, isFinished} = gameLeaderboard

    useEffect(() => {
        const isTimerValuePositive = timerCount >= 0;
        isTimerValuePositive && setTimerText(createTimerText(timerCount));
    }, [timerCount]);

    useEffect(() => {
        let timerInterval;
        if (isRaffleActive && !raffleTickets.length) {
            timerInterval = startTimer(raffleDuration, setTimerCount);
        }
        if (!isRaffleActive) {
            setTimerCount(raffleDuration);
        }

        return () => clearInterval(timerInterval);
    }, [isRaffleActive, raffleTickets.length]);

    const scrollableTarget = useRef(null);

    return (
        <div className={`game-gird__info-containers-wrapper ${isEmpty ? 'empty' : ''}`}>
            {activeTab === 'Leaderboard' && !isLeaderboardActive &&
            <TopPlacesLeaderboard topPlaces={list}/>}
            <ul className="game-grid__info-containers" ref={scrollableTarget}
                style={activeTab === 'Leaderboard' ? ({
                    maxHeight: '295px',
                    overflowY: 'hidden'
                }) : ({maxHeight: '400px'})}>
                {activeTab === 'Current Game' && <CurrentGame/>}
                {activeTab === 'Statistics' && <Statistics/>}
                {activeTab === 'Draw History' && <DrawHistory/>}
                {activeTab === 'My history' && <UserHistory scrollableTarget={scrollableTarget.current}/>}
                {activeTab === 'Leaderboard' && !isLeaderboardActive &&
                <LeaderboardList isFinished={isFinished} playerPlace={playersCurrentPlace} list={list}/>}
            </ul>
            <div className="no-tickets active">
                <div className="no-tickets__text">{languageData.noTickets}</div>
                <div className="no-tickets__time">{timerText}</div>
            </div>
        </div>
    );
};

function startTimer(duration, setTimerCount) {
    let timer = duration;
    const intervalId = setInterval(function () {
        setTimerCount(timer);
        if (--timer < 0) {
            clearInterval(intervalId);
        }
    }, 1000);
    return intervalId;
}

export function createTimerText(sec) {

    let timerInSeconds = sec;
    const minutes = '0' + Math.floor(timerInSeconds / 60);
    const seconds = '0' + Math.floor(timerInSeconds % 60);
    return `${minutes.slice(-2)} : ${seconds.slice(-2)}`;

}

const mapStateToProps = ({gameLeaderboard, isRaffleActive, raffleInfoReducer: {raffleTickets}}) => ({
    isRaffleActive, raffleTickets, gameLeaderboard
});

export default connect(mapStateToProps)(InfoContainer);
