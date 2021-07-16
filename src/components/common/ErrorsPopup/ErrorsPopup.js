import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeErrorMessage } from "../../../redux/ducks/errorDuck";

const ErrorsPopup = () => {

  const dispatch = useDispatch()
  const errorMessage = useSelector(state => state.errorInfo)

  return (
    <div className={`${errorMessage ? 'errorPopup active' : 'errorPopup'}`}>
      <div className="errorPopup__container">

        <div style={{maxHeight: '10px', maxWidth: '10px'}}>
          <button onClick={() => dispatch(removeErrorMessage())} className="popup__close">Close popup</button>
        </div>
        <div className="errorPopup__title">{errorMessage}</div>
      </div>
      <div className="popup__wrapper"/>
    </div>
  );
};

export default ErrorsPopup;
