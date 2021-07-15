import React from "react";
import {connect} from "react-redux";
import {closeErrorsPopup} from "../../redux/actions/errorActions";

const ErrorsPopup = ({errorsPopup, closeErrorsPopup}) => {

  return (

    <div className={`${errorsPopup ? 'errorPopup active' : 'errorPopup'}`}>
      <div className="errorPopup__container">
        <div style={{maxHeight: '10px', maxWidth: '10px'}}>
          <button onClick={() => closeErrorsPopup()} className="error_popup__close">Close popup</button>
        </div>
        <div className="errorPopup__title">{errorsPopup}</div>
      </div>
      <div className="popup__wrapper"/>
    </div>
  );
};

const mapStateToProps = ({errorsPopup}) => ({
  errorsPopup
});

const mapDispatchToProps = {
  closeErrorsPopup
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsPopup);
