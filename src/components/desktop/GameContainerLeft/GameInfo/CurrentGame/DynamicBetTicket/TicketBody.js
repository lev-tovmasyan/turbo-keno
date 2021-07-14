import React from "react";
import TicketRow from "./TicketRow";
import {useLanguageData} from "../../../../../Context/LanguageContext";

const TicketBody = ({selectedBetBtns, ballFrequency}) => {

    const languageData = useLanguageData()

  return (
    <div className="current-ticket__grid current-ticket__grid--body">
      <TicketRow ballFrequency={ballFrequency} selectedBetBtns={selectedBetBtns}/>

      <div className="current-ticket__row">
        <div className="current-ticket__bet-title">
            {languageData.status}
        </div>
        <div className="current-ticket__rate-odds">
            {languageData.pending}
        </div>
      </div>
    </div>
  );
};
export default TicketBody;
