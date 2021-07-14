import React from "react";
import images from "../../assets/images";
import {useLanguageData} from "../../Context/LanguageContext";

const HeaderSoundButton = () => {
    const languageData = useLanguageData()

  return (
    <li className="game-settings__item">
      <button className="game-settings__button game-settings__button--sound">
        <img src={images.sound} width="16" height="16" alt="sound icon on"
             className="game-settings__image"/>
        <img src={images.sound_disable} width="16" height="16" alt="sound icon off"
             className="game-settings__image"/>
        <span className="game-settings__text">{languageData.soundOn}</span>
      </button>
    </li>
  );
};

export default HeaderSoundButton;
