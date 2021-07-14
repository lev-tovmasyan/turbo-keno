import React from 'react';
import HeaderInfoButton from "./HeaderInfoButton";
import UserData from "./UserData/UserData";
import Popup from "../Popup/Popup";
import LeaderBoardPopup from "../Popup/LeaderBoardPopup";

const Header = () => {

    return (
        <header className="header">
            <div className="container">
                <Popup/>
                <LeaderBoardPopup/>
                <UserData/>
                <div className="header__container right-width header__container--right">
                    <ul className="game-settings__list">
                        <HeaderInfoButton/>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
