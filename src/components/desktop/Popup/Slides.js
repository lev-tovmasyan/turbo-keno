import React, {useState} from 'react';
import images from "../../assets/images";
import {changePopup} from "../../redux/actions/popupActions";
import {connect} from 'react-redux';

const {step_1, step_2, step_3, step_4, step_5, step_6, step_7} = images;

const gameInfoText_1 = '1. Choose your ticket numbers(up to 10) from the right side table, then select your bet and press OK.'
const gameInfoText_2 = '2. You can choose the amount of numbers randomly as well, by “Reload” button.'
const gameInfoText_3 = '3. Random number generator deals 20 numbers.'
const gameInfoText_4 = '4. Matching numbers are shown by highlighting.'
const gameInfoText_5 = '5. The deal is done and you can check the result.'
const gameInfoText_6 = '6. The results of the last 10 games can be found in section “Draw History”.'
const gameInfoText_7 = '7. You can check all your tickets in “My history” section.'
const gameInfoText_8 = '8. Now let’s experience your chance to WIN!'
const playText = 'Play'
const stepsText = 'Here are the steps to get started'

const gameInfo = {
    [gameInfoText_1]: step_1,
    [gameInfoText_2]: step_2,
    [gameInfoText_3]: step_3,
    [gameInfoText_4]: step_4,
    [gameInfoText_5]: step_5,
    [gameInfoText_6]: step_6,
    [gameInfoText_7]: step_7,
    [gameInfoText_8]: playText
};

const Slides = ({changePopup}) => {

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
                <div className="popup__title">{stepsText}</div>
                {
                    Object.entries(gameInfo).map(([info, img], index, array) => {
                        return (
                            <div key={info}
                                 style={{display: index === currentSlide ? 'block' : 'none', textAlign: 'center'}}>
                                <div className="text">{info}</div>
                                {
                                    img === 'Play'
                                        ? <span className="welcome__play-game slide" style={{height: '300px'}}
                                                onClick={changePopup}>Play</span>
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
};

const mapDispatchToProps = {
    changePopup
};
export default connect(null, mapDispatchToProps)(Slides);
