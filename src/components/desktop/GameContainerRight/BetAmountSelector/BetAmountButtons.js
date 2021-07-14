import React from "react";
import AmountButton from "./AmountButton";

const amounts = [50, 100, 200, 500];

const BetAmountButtons = () => {

  return (
    <ul className="input-controls__list">
      {
        amounts.map(amount => {
          return <AmountButton key={amount} amount={amount}/>;
        })
      }
    </ul>
  );
};

export default BetAmountButtons;