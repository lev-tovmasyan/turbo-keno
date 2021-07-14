import React from "react";
import RuleRow from "./RuleRow";
import {MATCH_GRID} from '../../../../../constants/game';

const RuleRowList = ({selectedBetBtns}) => {

  const payouts = MATCH_GRID[selectedBetBtns.length];

  return (
    <div className={`current-ticket__grid-rule active`}>
      <RuleRow payouts={payouts} title='Coincidences'/>
      <RuleRow payouts={payouts} title='Payouts'/>
    </div>
  );
};

export default RuleRowList;