import React, {useEffect} from "react";
import RuleColumn from "./RuleColumn";
import PossibleWin from "./PossibleWin";
import {addPayout} from "../../../../../redux/actions/payoutActions";
import {connect} from 'react-redux';
import {useLanguageData} from "../../../../../Context/LanguageContext";

const RuleRow = ({payouts, addPayout, title}) => {
    const languageData = useLanguageData()

  const lastEl = payouts.length - 1;

  useEffect(() => {
    title === 'Payouts' && addPayout(payouts[lastEl]);
  }, [addPayout, lastEl, payouts, title]);

  return (
    <div className="current-ticket__grid-rule-row">
      <div className="current-ticket__grid-rule-column">
        {title === 'Payouts' ? languageData.payouts : null}
        {title === 'Coincidences' ? languageData.coincidences : null}
      </div>
      {
        payouts.map((payout, index) =>
          !!payout &&
          <RuleColumn key={index} payout={title === 'Payouts' ? `x${payout}` : !!payout && index}/>
        )
      }
      {title === 'Payouts' && <PossibleWin/>}
    </div>
  );
};

const mapDispatchToProps = {
  addPayout
};

export default connect(null, mapDispatchToProps)(RuleRow);
