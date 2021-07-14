import React from "react";

const RuleColumn = ({payout}) => {

  return (
    <div className="current-ticket__grid-rule-column">
      {payout}
    </div>
  );
};

export default RuleColumn;