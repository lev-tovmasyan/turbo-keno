import React from "react";
import {connect} from "react-redux";
import {changePopup} from "../../redux/actions/popupActions";
import Slides from "./Slides";
import Table from "./Table";
import Rules from "./Rules";
import { useLanguageData } from "../../Context/LanguageContext";

const Popup = ({openPopup, changePopup, betAmountOption, currency}) => {

  const languageData = useLanguageData()

  return (
    <div className={`${openPopup ? 'popup active' : 'popup'}`}>
      <div className="popup__container" style={{borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>
        <button onClick={changePopup} className="popup__close">Close popup</button>

        <Rules betAmountOption={betAmountOption} currency={currency}/>
        <Table/>

        <div className="popup__title">{languageData['howToPlay']}</div>
        <p className="popup__text">
          {languageData['kenoInfo']}
        </p>
        <Slides/>
      </div>
      <div onClick={changePopup} className="popup__wrapper"/>
    </div>
  );
};

const mapStateToProps = ({openPopup, betAmountOptionReducer, currencyReducer}) => ({
  openPopup,
  betAmountOption: betAmountOptionReducer,
  currency: currencyReducer
});

const mapDispatchToProps = {
  changePopup
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
