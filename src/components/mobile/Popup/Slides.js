import React, {useState} from 'react';
import images from "../../assets/images";
import {connect} from 'react-redux';
import {hidePopup} from "../../redux/actions/popupActions";

const {step_1, step_2, step_3, step_4, step_5, step_6, step_7} = images;

const gameInfo = {
  '1. Choose your ticket numbers(up to 10) from the right side table, then select your bet and press OK.': step_1,
  '2. You can choose the amount of numbers randomly as well, by “Reload” button.': step_2,
  '3. Random number generator deals 20 numbers.': step_3,
  '4. Matching numbers are shown by highlighting.': step_4,
  '5. The deal is done and you can check the result.': step_5,
  '6. The results of the last 10 games can be found in section “Draw History”.': step_6,
  '7. You can check all your tickets in “My history” section.': step_7,
  '8. Now let’s experience your chance to WIN!': 'Play'
};

const Slides = ({hidePopup}) => {

  const maxLength = Object.keys(gameInfo).length;

  const [currentSlide, setCurrentSlide] = useState(0);

  const slideIndex = (num) => {
    let index;
    if (currentSlide + num >= maxLength) {
      index = 0;
    } else if (currentSlide + num < 0) {
      index = maxLength - 1;
    } else {
      index = currentSlide + num;
    }
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="slideShow-container">
        <div className="popup__title">Here are the steps to get started</div>
        {
          Object.entries(gameInfo).map(([info, img], index, array) => {
            return (
              <div key={info} style={{display: index === currentSlide ? 'block' : 'none', textAlign: 'center'}}>
                <div className="text">{info}</div>
                {
                  img === 'Play'
                    ? <div className="game-start__start-game-button-container slide">
                      <span className="game-start__start-game-button" onClick={closeClickHandler}> </span>
                    </div>
                    : <img className='slides' src={img}/>
                }

                <div className="numberText">{`${index + 1} / ${array.length}`}</div>
              </div>
            );
          })
        }
        <a className="prev" onClick={() => slideIndex(-1)}>&#10094;</a>
        <a className="next" onClick={() => slideIndex(1)}>&#10095;</a>
      </div>
    </>
  );

  function closeClickHandler() {
    hidePopup();
  }

};

const mapDispatchToProps = {
  hidePopup: () => hidePopup
};
export default connect(null, mapDispatchToProps)(Slides);