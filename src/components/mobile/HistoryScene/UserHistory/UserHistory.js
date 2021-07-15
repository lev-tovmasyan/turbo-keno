import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import UserHistoryDrawContainer from './HistoryTicket/UserHistoryDrawContainer';
import {BALL_COUNTS} from '../../../constants/game';
import UserHistoryTicket from './HistoryTicket/UserHistoryTicket';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import {getToken, url} from '../../../constants/api';
import dataParser from '../../../helpers/dataParser';
import PropTypes from 'prop-types';

UserHistory.propTypes = {
  scrollableTarget: PropTypes.object.isRequired
};

function UserHistory({scrollableTarget, userHistoryTickets}) {
  const [tickets, setTickets] = useState({});
  const [drawIds, setDrawIds] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {

    const initialDrawIds = Object.keys(userHistoryTickets).sort((a, b) => b - a);
    const hasMoreToLoad = !!Object.keys(userHistoryTickets).length;

    setTickets(userHistoryTickets);
    setHasMore(hasMoreToLoad);
    setDrawIds(initialDrawIds);

  }, []);

  return (
    <div
      className="game-grid__history-bet-tickets-container game-grid__history-bet-tickets-container--my-history active">

      <InfiniteScroll
        dataLength={drawIds.length}
        hasMore={hasMore}
        next={getTickets}
        loader={loader}
        scrollableTarget={scrollableTarget}
        endMessage={endMessageElem}
      >
        {drawIds.map((drawId) => {
          return (
            <UserHistoryDrawContainer
              gameId={drawId}
              key={drawId}>
              {tickets[drawId].map(ticket =>
                <UserHistoryTicket
                  key={ticket.id}
                  digits={ticket.digits.sort((a, b) => a - b)}
                  headBet={ticket.betMoney}
                  ballCount={BALL_COUNTS.USER_TICKET}
                  isStatusTextNeed={true}
                  ticketStatus={ticket.ticketStatus}
                  winCombination={ticket.winCombination}
                  headWonMoney={ticket.wonMoney}
                />
              )}
            </UserHistoryDrawContainer>);
        })}

      </InfiniteScroll>
    </div>
  );

  function getTickets() {

    const nextPage = page + 1;

    axios({
      method: 'post',
      url: url.concat('/get-stakes'),
      data: {
        token: getToken(),
        page: nextPage
      }
    }).then((response) => {
      setPage(nextPage);
      const gameData = JSON.parse(response.data.res.data);
      const parsedData = dataParser(gameData);
      const {userHistoryTickets} = parsedData;

      setHasMore(!!gameData.userStakes.length);
      setTickets((prevState) => ({...prevState, ...userHistoryTickets}));
      setDrawIds((prevState) => ([...prevState, ...Object.keys(userHistoryTickets)]
        .filter((drawId, index, array) => array.indexOf(drawId) === index)
        .sort((a, b) => b - a)));
    });
  }
}

const loader = <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <div style={{width: '6%'}} className="game-loading-container__loader-icon">
    <div className="game-loading-container__loader-icon-svg">
      <svg x="0px" y="0px" viewBox="0 0 103.5 103">
        <path d="M51.8,103C23.4,103,0.3,79.9,0.3,51.5S23.4,0,51.8,0c6.9,0,13.7,1.4,20,4c3.6,1.5,5.2,5.6,3.7,9.2
                        c-1.5,3.6-5.6,5.2-9.2,3.7c-4.6-2-9.5-2.9-14.6-2.9c-20.7,0-37.5,16.8-37.5,37.5S31.1,89,51.8,89c20.7,0,37.5-16.8,37.5-37.5
                        c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7C103.3,79.9,80.2,103,51.8,103z"/>
      </svg>
    </div>
  </div>
</div>;

const endMessageElem = <p style={{textAlign: 'center'}}><b> Yay! You have seen it all </b></p>;

const mapStateToProps = ({userHistoryReducer}) => ({
  userHistoryTickets: userHistoryReducer
});

export default connect(mapStateToProps)(UserHistory);