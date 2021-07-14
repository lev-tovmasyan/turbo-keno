import React from 'react';
import {forMap} from "../../helpers/general";
import {KENO_TABLE} from "../../constants/game";
import { useLanguageData } from '../../Context/LanguageContext';

const Table = () => {

  const languageData = useLanguageData()

  return (
    <>
      <div className="popup__title">{languageData['paymentTitle']}</div>

      <p className='matches'>{languageData['Number of guessed ball']}</p>

      <table style={{margin: '20px', background: "silver"}}>
        <caption>{languageData['Number of balls on which bets were made']}</caption>
        <thead>
        <tr className='grid_tr'>
          {
            forMap(11, (i) => {
              return <th className='grid_td' key={i} style={{color: 'white'}}>{!!i && i}</th>;
            })
          }
        </tr>
        </thead>
        <tbody>
        {
          Object.entries(KENO_TABLE).map(([coincidence, coefficients]) => {
            return (
              <tr className='grid_tr' key={coincidence}>
                <td className='grid_td'>{coincidence}</td>
                {
                  coefficients.map((coefficient, index) => {
                    return <td className='grid_td' key={index}>{coefficient}</td>;
                  })
                }
              </tr>
            );
          })
        }
        </tbody>
      </table>
      <p>
        {languageData['paymentExample']}
      </p>
      </>
  );
}
export default Table
