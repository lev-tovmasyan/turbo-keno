import React from "react";
import BetButton from "./BetButton";
import {forMap} from "../../helpers/general";
import {connect} from "react-redux";
import {getTicketBallColor} from '../../helpers/game';

const BET_BTNS_COUNT = 80;

const BetButtonsGrid = ({ballFrequency}) => {

  return (
    <ul className="bet-numbers">
      {forMap(BET_BTNS_COUNT, (index) => {
        const digit = index + 1;
        const color = getTicketBallColor(ballFrequency, digit);
        return <BetButton digit={digit} key={index} color={color}/>;
      })}
    </ul>
  );
};

const mapStateToProps = ({ballFrequencyReducer}) => ({
  ballFrequency: ballFrequencyReducer
});

export default connect(mapStateToProps)(BetButtonsGrid);