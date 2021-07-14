import React from "react";
import TicketBody from "./TicketBody";
import TicketHeader from "./TicketHeader";
import RuleRowList from "../RuleRowList/RuleRowList";
import {connect} from 'react-redux';

const DynamicBetTicket = ({ticketReducer, selectedAmount, lastPayout, ballFrequency, selectedBetBtns}) => {

  const number = ticketReducer.length + 1;
  const payout = !!lastPayout ? 'x' + lastPayout : '';

  return (
    <li className="current-ticket dont-choose">
      <TicketHeader number={number} payout={payout} selectedAmount={selectedAmount}/>
      <TicketBody selectedBetBtns={selectedBetBtns.sort((a, b) => a - b)} ballFrequency={ballFrequency}/>
      <div className="current-ticket__grid-rule-possible-winning">
        <RuleRowList selectedBetBtns={selectedBetBtns}/>
      </div>
    </li>
  );
};

const mapStateToProps = ({ticketReducer, selectedAmount, lastPayout, selectedBetBtns, ballFrequencyReducer}) => ({
  ticketReducer,
  selectedAmount,
  lastPayout,
  selectedBetBtns,
  ballFrequency: ballFrequencyReducer
});

export default connect(mapStateToProps)(DynamicBetTicket);