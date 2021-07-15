import React from 'react';
import { useLanguageData } from '../../Context/LanguageContext';
import Slides from "./Slides";

function HowToPlayTab() {

  const languageData = useLanguageData()

  return (

    <div className="popup__tabs-container active">
      <p>{languageData['kenoInfo']}</p>
      <Slides/>
    </div>
  );
}

export default HowToPlayTab;