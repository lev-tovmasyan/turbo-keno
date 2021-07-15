import React, {useState, useRef} from 'react';
import CoincidenceGridTab from './CoincidenceGridTab';
import HowToPlayTab from './HowToPlayTab';
import RulesTab from './RulesTab';
import PopupTabButton from './PopupTabButton';
import {connect} from 'react-redux';
import {hidePopup} from '../../redux/actions/popupActions';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const TAB_NAMES = {
  COINCIDENCE: 'Coincidence',
  HOW_TO_PLAY: 'How to play',
  RULES: 'Rules'
};

const {COINCIDENCE, HOW_TO_PLAY, RULES} = TAB_NAMES;

const TABS = {
  [COINCIDENCE]: <CoincidenceGridTab/>,
  [HOW_TO_PLAY]: <HowToPlayTab/>,
  [RULES]: <RulesTab/>
};

function Popup({popupReducer, hidePopup}) {

  const [tabName, setTabName] = useState(COINCIDENCE);
  const ref = useRef(null);
  useOnClickOutside(ref, () => isPopupVisible && hidePopup());
  const currentTab = TABS[tabName];
  const isPopupVisible = popupReducer;

  return (
    <>
      <div className={`background-popup ${isPopupVisible ? 'active' : ''}`}/>
      <div className={`popup__list ${isPopupVisible ? 'active' : ''}`}>
        <div ref={ref} className="popup__list-container">
          <div className="popup__header">
            <ul className="popup__tab-list">
              <PopupTabButton
                name={COINCIDENCE}
                clickHandler={tabClickHandler}
                active={changeButtonActivity(tabName, COINCIDENCE)}/>
              <PopupTabButton
                name={HOW_TO_PLAY}
                clickHandler={tabClickHandler}
                active={changeButtonActivity(tabName, HOW_TO_PLAY)}/>
              <PopupTabButton
                name={RULES}
                clickHandler={tabClickHandler}
                active={changeButtonActivity(tabName, RULES)}/>
            </ul>
            <button className="popup__header-close-button" onClick={closeClickHandler}/>
          </div>
          <div className="popup__body">
            {currentTab}
          </div>
        </div>
      </div>
    </>
  );

  function tabClickHandler(event) {
    const tabName = event.currentTarget.id;
    setTabName(tabName);
  }

  function closeClickHandler() {
    hidePopup();
    setTabName(COINCIDENCE);
  }
}

function changeButtonActivity(tabName, buttonTabName) {
  return tabName === buttonTabName ? 'active' : '';
}

const mapStateToProps = ({popupReducer}) => ({popupReducer});
const mapDispatchToProps = {hidePopup: () => hidePopup};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);