import { AXIOS } from "../../api/axios";
import { getToken } from "../../helpers/general";
import { setConfigs } from "../ducks/configsDuck";

export function getGameVersions() {
  return (dispatch) => {
    AXIOS.get(`/1/get-info/${getToken()}`).then((response) =>
      console.log(
        "response",
        response
      )
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
