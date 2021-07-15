import React from 'react';
import {connect} from 'react-redux';
import {numberWithCommas} from '../../helpers/general';

function RowLeaderboardList({playerId, points, possibleWin, userId, place, ticketRef, ticketsCount}) {
    return (
        <div ref={ticketRef}
             style={{
                 display: 'flex',
                 padding: '2.2vh 0.3vh 2.2vh 1vh',
                 textAlign: 'start',
                 alignItems: 'center'
             }}
             className={`leaderboard-list-row ${playerId === userId ? 'users-row' : place % 2 ? '#22182b' : '#291d33'}`}>
            <div style={{flex: 10}}>{place}</div>
            <div style={{flex: 20, color: `${playerId === userId ? '#e3aa5e' : ''}`}}>ID: {playerId}</div>
            <div style={{flex: 17, color: `${playerId === userId ? '#ffffff' : ''}`}}>{points}</div>
            <div style={{flex: 28, color: `${playerId === userId ? '#ffffff' : ''}`}}>{ticketsCount}</div>
            <div style={{flex: 25, color: '#549782'}}>{numberWithCommas(possibleWin)}</div>
        </div>
    )
}


const mapStateToProps = ({userReducer: {userId}}) => ({
    userId
});

export default connect(mapStateToProps)(RowLeaderboardList);
