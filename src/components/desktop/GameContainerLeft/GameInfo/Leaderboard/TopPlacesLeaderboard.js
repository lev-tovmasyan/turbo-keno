import React from 'react';
import {connect} from 'react-redux';
import {numberWithCommas} from '../../../../helpers/general';
import images from "../../../../assets/images";
import {showLeaderboardPopup} from "../../../../redux/actions/popupActions";
import {useLanguageData} from "../../../../Context/LanguageContext";

function TopPlacesLeaderboard({topPlaces, showPopup}) {
    const languageData = useLanguageData()

    return (
        <>
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
                        return (
                            <div className='leaderboard-single-cup-container' key={index}>
                                <div className={`leaderboard-cup cup${index+1}`}/>
                                <div className='leaderboard-cup-props'>
                                    <div>{languageData.ID}: {playerId}</div>
                                    <div className='leaderboard-cup-props-points'>{points} {languageData.pts}</div>
                                    <div>{numberWithCommas(possibleWin)}</div>
                                </div>
                                {index < 2 && <div className='leaderboard-list-separator-vertical'/>}
                            </div>
                        )
                    }
                })}
            </div>
            <div className='leaderboard-list-separator'/>
        </>
    )
}

const mapDispatchToProps = {showPopup: () => showLeaderboardPopup}

export default connect(null, mapDispatchToProps)(TopPlacesLeaderboard);
