import React from "react";
import Ticket from "./Ticket";
import {useLanguageData} from "../../../../../Context/LanguageContext";

const UserHistoryDrawContainer = ({drawId, tickets}) => {
    const languageData = useLanguageData()

  return (
    <li className="my-history__item">
      <div className="my-history__id">
        <span>{languageData.ID}: {drawId}</span>
      </div>
      <ul className="current-tickets current-tickets--my-history">
        {
          tickets.map((ticket, index) => {
            return <Ticket key={index} ticket={ticket} number={index + 1}/>;
          })
        }
      </ul>
    </li>
  );
};

export default UserHistoryDrawContainer;
