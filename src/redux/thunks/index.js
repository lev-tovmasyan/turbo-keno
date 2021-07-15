import { AXIOS } from "../../api/axios";
import dataParser from "../../helpers/dataParser";
import { getToken } from "../../helpers/general";
import { setConfigs } from "../ducks/configsDuck";
import { setErrorMessage } from "../ducks/errorDuck";

export function getGameVersions() {
  return (dispatch) => {
    AXIOS.get(`/1/get-info/${getToken()}`).then((res) => {
      const data = res.res.parsedData
      if(data.error || res.error) {
        dispatch(setErrorMessage(res.error ? 'Something Went Wrong' : data.message))
        return console.log('get-info error', data.message)
      }
      const { betAmountOption, currency } = dataParser(data)
      // console.log('parsedData', parsedData)
      // const { maxWin, maximalBet: maxBet, minimalBet: minBet, currency } = data

      dispatch(setConfigs({ ...betAmountOption, currency }))
    }
    );
    // .then(data => {
    //       if (data.error) {
    //           dispatch(setError(data.message));
    //           console.log(data.note);
    //           return;
    //       }

    //       const {possibleGameVersions} = data;
    //       const parsedData = dataParser(data);
    //       const {betAmountOption, currency} = parsedData;

    //       if (possibleGameVersions.length === 1) {
    //           const [kenoType] = possibleGameVersions;
    //           dispatch(goToGameScene());
    //           dispatch(setKenoType(+kenoType));
    //       } else {
    //           dispatch(setBetAmountOption(betAmountOption));
    //           dispatch(setCurrency(currency));
    //           dispatch(goToMenuScene());
    //       }
    //       dispatch(setGameVersions(possibleGameVersions));
    //   })
    //       .catch((e) => {
    //           console.log('keno/get-info', e);
    //           `${e}` === 'Error: Network Error' ?
    //               dispatch(setError('Error. Low internet connection.'))
    //               :
    //               dispatch(setError('Something went wrong, please try again.'));
    //       });
  };
}
