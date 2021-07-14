import React from "react";
import images from "../../assets/images";
import {connect} from "react-redux";
import {changePopup} from "../../redux/actions/popupActions";
import {useLanguageData} from "../../Context/LanguageContext";

const HeaderInfoButton = ({changePopup}) => {
    const languageData = useLanguageData()

  return (
    <li className="game-settings__item">
            <span onClick={() => changePopup()} className="game-settings__button">
                <img src={images.info} width="11" height="15" alt="icon info"
                     className="game-settings__image"/>
                <span className="game-settings__text">{languageData.howToPlay}</span>
            </span>
    </li>
  );
};

const mapDispatchToProps = {
  changePopup
};

export default connect(null, mapDispatchToProps)(HeaderInfoButton);
