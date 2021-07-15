import React from 'react';
import {connect} from 'react-redux';
import { useLanguageData } from '../../Context/LanguageContext';
import {forMap} from "../../helpers/general";

function RulesTab({betAmountOption, currency}) {

  const languageData = useLanguageData()

  const {minBet, maxBet, maxWin} = betAmountOption;

  return (
    <div className="popup__tabs-container active">
      <p>
        {languageData['rulesInfo']}
      </p>
      <table className = 'limits_table'>
        <tbody>
              <tr>
                <td>{languageData['minBet']}</td>
                <td>{minBet} {currency}</td>
              </tr>
              <tr>
                <td>{languageData['maxBet']}</td>
                <td>{maxBet} {currency}</td>
              </tr>
              <tr>
                <td>{languageData['maxWin']}</td>
                <td>{maxWin} {currency}</td>
              </tr>
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = ({betAmountOptionReducer, currencyReducer}) => ({
  betAmountOption: betAmountOptionReducer,
  currency: currencyReducer
})

export default connect(mapStateToProps)(RulesTab);