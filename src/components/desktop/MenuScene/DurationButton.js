import React from "react";
import {connect} from 'react-redux';
import {setKenoType} from "../../redux/actions/kenoTypeActions";
import {KENO_TYPES, SIDES} from '../../constants/game';
import {useLanguageData} from "../../Context/LanguageContext";

const {KENO_1} = KENO_TYPES;

const DurationButton = ({duration, kenoType, setDuration}) => {
    const languageData = useLanguageData()

  return (
    <label className="game-duration__label">
      <input className="game-duration__input"
             type="radio" name="game-duration"
             defaultChecked={duration === kenoType}
      />
      <span
        onClick={() => setDuration(duration)}
        className={`game-duration__text game-duration__text--${duration === KENO_1 ? SIDES.LEFT : SIDES.RIGHT}`}
      >
                {duration} {languageData.minutes}.
            </span>
    </label>
  );
};

const mapStateToProps = ({kenoType}) => ({
  kenoType
});

const mapDispatchToProps = {
  setDuration: setKenoType
};

export default connect(mapStateToProps, mapDispatchToProps)(DurationButton);
