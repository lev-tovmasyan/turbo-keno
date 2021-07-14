import React from "react";
import BetAmountButtons from "./BetAmountButtons";
import BetAmountInput from "./BetAmountInput";

const BetAmountSelector = () => {

  return (
    <div className="input-controls">
      <BetAmountButtons/>
      <BetAmountInput/>
    </div>
  );
};

export default BetAmountSelector;