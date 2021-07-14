import React from 'react';
import { useLanguageData } from '../../Context/LanguageContext';

const Rules = ({betAmountOption, currency}) => {

  const languageData = useLanguageData()

  const {minBet, maxBet, maxWin} = betAmountOption;
  return (
    <>
      <div className="popup__title">{languageData['rules']}</div>
      <p className="popup__text">
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
    </>
  )
}

export default Rules
