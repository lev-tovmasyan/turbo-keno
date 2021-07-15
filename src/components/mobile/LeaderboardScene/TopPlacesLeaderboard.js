import React from 'react';
import {connect} from 'react-redux';
import {numberWithCommas} from '../../helpers/general';
import images from "../../assets/images";
import {showLeaderboardPopup} from "../../redux/actions/popupActions";

function TopPlacesLeaderboard({topPlaces, showPopup}) {
    return (
        <div className='leaderboard-cups-container'>
            <div
                className='leaderboard__button--info'
                onClick={showPopup}
            >
                <img src={images.infoButton} alt="Info"/>
            </div>
            {topPlaces.map(({playerId, points, possibleWin, place}, index) => {
                    if (index > 2) {
                        return null
                    } else {
                        return (<div className='leaderboard-single-cup-container' key={index}>
                            <div className={`leaderboard-cup cup${index+1}`}/>
                            <div className='leaderboard-cup-props'>
                                <div>ID: {playerId}</div>
                                <div className='leaderboard-cup-props-points'>{points} pts</div>
                                <div>{numberWithCommas(possibleWin)}</div>
                            </div>
                            {/*{index < 2 && <div className='leaderboard-list-separator-vertical'/>}*/}
                        </div>)
                    }
                }
            )}
        </div>
    )
}

const mapDispatchToProps = {showPopup: () => showLeaderboardPopup}

export default connect(null, mapDispatchToProps)(TopPlacesLeaderboard);
