import React, {useState} from "react";
import {connect} from "react-redux";
import BetButtonsGrid from "./BetButtonsGrid";
import RandomChoice from "./RandomChoice/RandomChoice";
import BetAmountSelector from "./BetAmountSelector/BetAmountSelector";
import ConfirmButton from "./ConfirmButton";

const GameContainerRight = ({isRaffleActive}) => {
  const [isButtonActive, changeButtonActivity] = useState(true);

  return (
    <div className={`game-grid__container right-width ${isRaffleActive || !isButtonActive ? "blur active" : ""}`}>
      <BetButtonsGrid/>
      <RandomChoice/>
      <BetAmountSelector/>
      <ConfirmButton
        isButtonActive={isButtonActive}
        changeButtonActivity={changeButtonActivity}
      />
    </div>
  );
};

const mapStateToProps = ({isRaffleActive}) => ({
  isRaffleActive
});

export default connect(mapStateToProps)(GameContainerRight);