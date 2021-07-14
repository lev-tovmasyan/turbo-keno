import React from "react";
import {connect} from 'react-redux';
import Ticket from "./Ticket/Ticket";
import DynamicBetTicket from "./DynamicBetTicket/DynamicBetTicket";

const CurrentGame = ({ticketReducer, ballFrequency, isRaffleActive, raffleTickets, pulledDigits, currentBall}) => {

  return (
    <li className='game-grid__info-container game-grid__info-container--first active current-game current'>
      <ul className="current-tickets">
        {!isRaffleActive && <DynamicBetTicket ballFrequency={ballFrequency}/>}
        {isRaffleActive
          ? raffleTickets.map((ticket, index) =>
            <Ticket key={index} ticket={ticket} number={index + 1} ballFrequency={ballFrequency}
                    pulledDigits={pulledDigits}/>
          )
          : ticketReducer.map((ticket, index) =>
            <Ticket key={index} ticket={ticket} number={index + 1} ballFrequency={ballFrequency}/>
          )
        }
      </ul>
    </li>
  );
};

const mapStateToProps = ({
                           ticketReducer, ballFrequencyReducer,
                           isRaffleActive, raffleInfoReducer: {raffleTickets},
                           pulledDigitsReducer, currentBall
                         }) => ({
  ticketReducer,
  ballFrequency: ballFrequencyReducer,
  isRaffleActive,
  raffleTickets,
  pulledDigits: pulledDigitsReducer,
  currentBall
});

export default connect(mapStateToProps)(CurrentGame);