import React from 'react';
import {connect} from 'react-redux';
import {numberWithCommas} from '../../../../helpers/general';
import {useLanguageData} from "../../../../Context/LanguageContext";


function RowLeaderboardList({playerId, points, possibleWin, userId, place, ticketRef, ticketsCount}) {
    const languageData = useLanguageData()

    return (
        <div ref={ticketRef}
             style={{
                 display: 'flex',
                 height: '39px',
                 textAlign: 'start',
                 padding: '12px 2px 0 5px',
             }}
             className={`leaderboard-list-row ${playerId === userId ? 'users-row' : place % 2 ? '#22182b' : '#291d33'}`}>
            <div style={{flex: 10}}>{place}</div>
            <div style={{flex: 20, color: `${playerId === userId ? '#e3aa5e' : ''}`}}>{languageData.ID}: {playerId}</div>
            <div style={{flex: 17, color: `${playerId === userId ? '#ffffff' : ''}`}}>{points}</div>
            <div style={{flex: 28, color: `${playerId === userId ? '#ffffff' : ''}`}}>{ticketsCount}</div>
            <div style={{flex: 25, color: '#549782'}}>{numberWithCommas(possibleWin)}</div>
        </div>
    )
}


const mapStateToProps = ({userDataReducer: {userId}}) => ({
    userId
});

export default connect(mapStateToProps)(RowLeaderboardList);
