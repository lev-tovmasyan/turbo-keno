import React from "react";

const congratsWinsText='Congratulations to the winners!'

const Congratulation = () => {
  return (
    <div className="game-grid__raffle-state  game-grid__raffle-state--congratulations active">
      <p>
          {congratsWinsText}
      </p>
    </div>
  );
};

export default Congratulation;
