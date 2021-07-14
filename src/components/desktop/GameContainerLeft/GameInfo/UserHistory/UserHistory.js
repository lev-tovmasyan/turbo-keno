import React, {useState} from "react";
import {connect} from "react-redux";
import UserHistoryDrawContainer from "./UserHistoryDrawContainer/UserHistoryDrawContainer";
import InfiniteScroll from 'react-infinite-scroll-component';
import dataParser from '../../../../helpers/dataParser';
import {getToken, url} from '../../../../constants/api';
import axios from 'axios';

const UserHistory = ({userHistoryTickets, scrollableTarget}) => {
  const [tickets, setTickets] = useState(userHistoryTickets);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const ticketsArr = Object.entries(tickets);

  return (
    <li className='game-grid__info-container active'>
      <ul className="my-history__list">
        <InfiniteScroll
          dataLength={ticketsArr.length}
          next={getTickets}
          hasMore={hasMore}
          scrollableTarget={scrollableTarget}
          loader={loader}
        >
          {
            ticketsArr.reverse().map(userStakes => {
              const [drawId, tickets] = userStakes;
              return <UserHistoryDrawContainer key={drawId} tickets={tickets} drawId={drawId}/>;
            })
          }
        </InfiniteScroll>
      </ul>
    </li>
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
    });
  }
};

const loader = <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <div className="customLoader"/>
</div>;

const mapStateToProps = ({userHistoryReducer}) => ({
  userHistoryTickets: userHistoryReducer
});

export default connect(mapStateToProps)(UserHistory);
