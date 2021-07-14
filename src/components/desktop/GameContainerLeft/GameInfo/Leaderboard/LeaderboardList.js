import React, {useEffect, useState, useRef, useCallback} from 'react';
import {connect} from "react-redux";
import RowLeaderboardList from './RowLeaderboardList';
import {getGameLeaderboard} from '../../../../redux/actions/dataActions'

function LeaderboardList({playerPlace, list, getGameLeaderboard, userId, isFinished}) {
    const [isTicketVisible, setIsTicketVisible] = useState(false);
    const [newData, setNewData] = useState(true)
    let [page, setPage] = useState(0)

    const ticketRef = useRef(null)

    const callbackTicketRef = useCallback(node => {

        if (ticketRef.current) ticketRef.current.disconnect()
        ticketRef.current = new IntersectionObserver((e => {
            if (e[0].isIntersecting) {
                setIsTicketVisible(true)
            }
            if (!e[0].isIntersecting) {
                setIsTicketVisible(false)
            }

        }))

        if (node) {
            ticketRef.current.observe(node)
        }

    }, [ticketRef])

    useEffect(() => {
        getGameLeaderboard();
    }, [])

    useEffect(() => {

        const controller = new AbortController();

        let count = 0;
        let elem = document.querySelector(`.leaderboard-scroll`);

        if (elem) {

            const elemHeight = elem.scrollHeight;

            const scrollEventListener = () => {
                if (elem.scrollTop + elem.clientHeight > elemHeight - 150 && !count) {
                    count++;
                    setPage(page += 1);
                    try {
                        (async () => {
                            await getGameLeaderboard(page);
                            count = 0;
                            elem.removeEventListener('scroll', scrollEventListener);
                            setNewData(!newData);
                        })()
                    } catch (err) {
                        console.log(err)
                    }
                }
            }

            elem.addEventListener('scroll', scrollEventListener);

            return () => {
                controller.abort();
                elem.removeEventListener('scroll', scrollEventListener);
            };
        }

    }, [newData]);

    const {playerId, place, points, possibleWin, ticketsCount} = playerPlace;

    return (
        <div className='leaderboard-list'>
            <div>
                <div style={{
                    display: 'flex',
                    marginBottom: '5px',
                    fontSize: '15px',
                    color: '#7a727d',
                    fontWeight: '700',
                    opacity: '0.5',
                    textAlign: 'start',
                }}>
                    <div style={{flex: 10}}/>
                    <div style={{flex: 20}}>Player ID</div>
                    <div style={{flex: 17}}>Points</div>
                    <div style={{flex: 28}}>Tickets Count</div>
                    <div style={{flex: 25, color: '#e3aa5e'}}>{isFinished ? 'Win' : 'Possible Win'}</div>
                </div>
            </div>
            <div className='leaderboard-scroll'
                 style={{
                     overflowY: 'auto',
                     display: 'flex',
                     flexDirection: 'column',
                     maxHeight: '235px',
                 }}
            >
                {list.map(({playerId, place, points, possibleWin, ticketsCount}) => {
                    if (playerId===0){
                        return null
                    }
                    if (userId === playerId) {
                        return (
                            <RowLeaderboardList {...{
                                ticketRef: callbackTicketRef,
                                playerId,
                                points,
                                possibleWin,
                                place,
                                ticketsCount,
                                key: place
                            }}/>)
                    }
                    return (
                        <RowLeaderboardList {...{
                            playerId,
                            points,
                            possibleWin,
                            place,
                            ticketsCount,
                            key: place
                        }}/>)
                })}
            </div>
            {!isTicketVisible &&
            < RowLeaderboardList playerId={playerId} place={place} points={points} ticketsCount={ticketsCount} possibleWin={possibleWin}/>}
        </div>
    );
}

const mapStateToProps = ({userDataReducer: {userId}}) => ({userId});

const mapDispatchToProps = {
    getGameLeaderboard,
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardList);
