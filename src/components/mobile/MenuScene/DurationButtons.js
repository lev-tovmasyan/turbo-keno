import React from 'react';
import {KENO_TYPES} from '../../constants/game';
import {connect} from 'react-redux';
import {setKenoType} from '../../redux/actions/kenoTypeActions';

function DurationButtons({kenoType, setKenoType, gameVersions}) {

  const {KENO_1, KENO_3} = KENO_TYPES;

  return (
    <div className="game-start__choose-duration">
      <div className="game-start__choose-duration-wrapper">
        {
          gameVersions.map(gameVersion => {
            return (
              <button key={gameVersion}
                      className={`game-start__choose-duration-button ${kenoType === gameVersion ? 'active' : ''}`}
                      onClick={clickHandler} value={gameVersion}>{gameVersion} min.</button>
            );
          })
        }
      </div>
    </div>
  );

  function clickHandler(e) {
    setKenoType(e.currentTarget.value);
  }
}

const mapStateToProps = ({kenoTypeReducer, gameVersionsReducer}) => ({
  kenoType: kenoTypeReducer,
  gameVersions: gameVersionsReducer
});

const mapDispatchToProps = {
  setKenoType
};

export default connect(mapStateToProps, mapDispatchToProps)(DurationButtons);