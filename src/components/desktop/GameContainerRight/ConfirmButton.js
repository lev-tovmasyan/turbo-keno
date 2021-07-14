import React from "react";
import {connect} from 'react-redux';
import {resetBetButtons} from "../../redux/actions/betBtnActions";
import {sendTicket} from "../../redux/actions/ticketActions";
import {getStoreState} from '../../redux/store';
import {setError} from "../../redux/actions/errorActions";
import {useLanguageData} from "../../Context/LanguageContext";

const ConfirmButton = ({isButtonActive, changeButtonActivity, userData, selectedBetBtns, 
  resetBetButtons, sendTicket, selectedAmount, tickets, isRaffleActive, setError, frontSecTillDraw}) => {
  const {userBalance} = userData;
  const languageData = useLanguageData()


  const areButtonsChosen = selectedBetBtns.length > 0;
  const isButtonEnabled = areButtonsChosen && isButtonActive && !isRaffleActive && (frontSecTillDraw && frontSecTillDraw >= 6);

  async function handleConfirm() {
    if (isButtonEnabled) {
      const ticketHeadNumber = tickets.length + 1;
      changeButtonActivity(false);
      if (userBalance >= selectedAmount) {
        await sendTicket(makeTicket(ticketHeadNumber));
        changeButtonActivity(true);
      } else {
        setError('Your balance is not enough, please refill it.');
        changeButtonActivity(true);
      }
    }
  }

  return (
    <div className="clear-confirm">
      <button className="clear-confirm__clear" onClick={resetBetButtons}/>
      <button className={`clear-confirm__confirm-bet ${isButtonEnabled ? '' : 'disable'}`}
              onClick={handleConfirm}>{languageData.bet.toUpperCase()}
      </button>
    </div>
  );
};

function makeTicket(ticketHeadNumber) {
  const date = new Date().toISOString();
  const {selectedBetBtns: digits, selectedAmount: betMoney} = getStoreState();

  return {
    id: ticketHeadNumber,
    date,
    digits,
    betMoney
  };
}

const mapStateToProps = ({selectedBetBtns, selectedAmount, lastPayout,
   isRaffleActive, ticketReducer, userDataReducer, frontSecTillDraw}) => ({
  userData: userDataReducer,
  selectedBetBtns,
  selectedAmount,
  lastPayout,
  isRaffleActive,
  tickets: ticketReducer,
  frontSecTillDraw
});

const mapDispatchToProps = {
  sendTicket,
  setError,
  resetBetButtons: () => resetBetButtons
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmButton);
