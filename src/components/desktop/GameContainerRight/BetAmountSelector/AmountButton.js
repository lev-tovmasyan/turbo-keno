import React from "react";
import {connect} from 'react-redux';
import {plusAmount} from "../../../redux/actions/amountActions";

const AmountButton = ({amount, plusAmount, betAmountOption}) => {

  return (
    <li className="input-controls__item">
      <button onClick={() => plusAmount([amount, betAmountOption.maxBet])}
              className="input-control__button">+{amount}</button>
    </li>
  );
};

const mapStateToProps = ({betAmountOptionReducer}) => ({
  betAmountOption: betAmountOptionReducer
});

const mapDispatchToProps = {
  plusAmount
};

export default connect(mapStateToProps, mapDispatchToProps)(AmountButton);