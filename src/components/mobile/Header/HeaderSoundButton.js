import React, {useState} from 'react';
import images from '../../assets/images';

function HeaderSoundButton() {

  const [isActive, setActivity] = useState(true);

  return (
    <li className="game-config__item">
      <button className={`game-config__button game-config__button--sound ${isActive ? '' : 'active'}`}
              onClick={clickHandler}>
        <img src={images.sound} alt="icon info button" className="game-config__button-img"/>
        <img src={images.sound_disable} alt='sound icon' className="game-config__button-img"/>
      </button>
    </li>
  );

  function clickHandler() {
    setActivity(!isActive);
  }
}

export default HeaderSoundButton;