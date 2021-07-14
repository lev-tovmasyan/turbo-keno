import React from "react";
import {connect} from 'react-redux';
import {useLanguageData} from "../../../../../Context/LanguageContext";

const PossibleWin = ({lastPayout, selectedAmount, currency, betAmountOptionReducer}) => {
  const languageData = useLanguageData()

  const possibleWin = lastPayout * selectedAmount;
  const {maxWin} = betAmountOptionReducer;
  return (
    <div className="current-ticket__grid-possible-winning">
      {languageData.possibleWin}
      <span>{possibleWin > maxWin ? maxWin : possibleWin} {currency}</span>
    </div>
  );
};

const mapStateToProps = ({lastPayout, selectedAmount, currencyReducer, betAmountOptionReducer}) => ({
  selectedAmount,
  lastPayout,
  currency: currencyReducer,
  betAmountOptionReducer
});

export default connect(mapStateToProps)(PossibleWin);
