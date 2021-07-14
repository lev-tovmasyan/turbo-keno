import React from "react";
import {connect} from "react-redux";
import {hideLeaderboardPopup} from "../../redux/actions/popupActions";

const LeaderBoardPopup = ({leaderboardPopupReducer, hidePopup, kenoLanguage}) => {
    return (
        <div className={`${leaderboardPopupReducer ? 'popup active' : 'popup'}`}>
            {renderInfo({hidePopup, kenoLanguage})}
            <div onClick={hidePopup} className="popup__wrapper"/>
        </div>
    );
};

function renderInfo({hidePopup, kenoLanguage}) {
    if (kenoLanguage === 'sw') {
        return (
            <div className="popup__container" style={{borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>
                <button onClick={hidePopup} className="popup__close">Close popup</button>
                <div className="popup__title-h1">TURBO KENO leaderboard</div>
                <div className="popup__title-h2">Pata sehemu yako!</div>
                <p className="popup__text">
                <div className="popup__title-h3">Jinsi ya kushiriki?</div>
                    1. Promosheni hii inaanza mnamo 01.12.2020<br/>
                    2. Zawadi ya promosheni hii ni TSH 1,000,000<br/>
                    3. Jinsi pointi uhesabiwa:<br/>
                    <div style={{paddingLeft: '30px'}}>
                        Kwa kila bashiri 100 - 199, 1 pointi<br/>
                        Kwa kila bashiri 200 - 499, pointi 3<br/>
                        Kwa kila bashiri 500 - 699, pointi 5<br/>
                        Kwa kila bashiri pointi 700 + 10
                        <p>Wachezaji tu ambao wana tiketi 10 na zaidi na TSH 100 na bashiri zaidi wanaweza kuonekana
                            kwenye leaderboard of Keno.</p>
                        <p style={{color: '#ffffff', fontSize: '12px'}}>* Ikiwa pointi za wachezaji kadhaa ni sawa
                            kwenye sehemu za ushindani za leaderboard mchezaji ambaye atakuwa na tiketi nyingi atakuwa
                            katika nasafi ya juu.</p>
                    </div>
                <div className="popup__title-h3">Tarehe ni zipi?</div>
                    Kuanzia <span style={{color: '#e3aa5e'}}>01/12/2020 </span>
                    saa 6 usiku hadi <span style={{color: '#e3aa5e'}}>31/12/2020 </span>
                    saa 5 usiku
                <div className="popup__title-h3">Zawadi ni zipi?</div>
                    Jumla ya zawadi ni TSH 1,000,000
                    <div style={{paddingLeft: '50px', paddingTop: '10px'}}>
                        <span style={{fontSize: '12px', textDecoration: 'underline'}}>
                            Nafasi
                        </span><br/>
                        <div>
                            <span style={{marginRight: '56px', paddingLeft: '20px'}}>1</span><span>500.000 TSH</span>
                        </div>
                        <div>
                            <span style={{marginRight: '56px', paddingLeft: '20px'}}>2</span><span>200.000 TSH</span>
                        </div>
                        <div>
                            <span style={{marginRight: '56px', paddingLeft: '20px'}}>3</span><span>150.000 TSH</span>
                        </div>
                        <div>
                            <span style={{marginRight: '56px', paddingLeft: '20px'}}>4</span><span>100.000 TSH</span>
                        </div>
                        <div>
                            <span style={{marginRight: '60px', paddingLeft: '20px'}}>5</span><span>50.000 TSH</span>
                        </div>
                    </div>
                </p>
            </div>)
    } else {
        return (
            <div className="popup__container" style={{borderTopRightRadius: '0', borderBottomRightRadius: '0'}}>
                <button onClick={hidePopup} className="popup__close">Close popup</button>
                <div className="popup__title-h1">TURBO KENO leaderboard</div>
                <div className="popup__title-h2">Get Your Share !</div>
                <p className="popup__text">
                <div className="popup__title-h3">How to participate?</div>
                    1. This promotion begins in 01.12.2020<br/>
                    2. Prize pool for promotion is 1.000.000 TSH<br/>
                    3. Point calculation logic:<br/>
                    <div style={{paddingLeft: '30px'}}>
                        For each bet 100 - 199, 1 points<br/>
                        For each bet 200 - 499, 3 points<br/>
                        For each bet 500 - 699, 5 points<br/>
                        For each bet 700 + 10 points
                        <p>Only those players who have 10 and more tickets with 100 TSH and more bets can appear on the
                            leaderboard of Keno.
                        </p>

                        <p style={{color: '#ffffff', fontSize: '12px'}}>*If the points of several players are equal on
                            the competitive places
                            of the leaderboard than the player who will have more tickets will be in higher places.</p>
                    </div>
                <div className="popup__title-h3">What Are The Dates?</div>
                    Starting from <span style={{color: '#e3aa5e'}}>01/12/2020 </span>
                    at 00:00:00 to <span style={{color: '#e3aa5e'}}>31/12/2020 </span>
                    at 23:00:00
                <div className="popup__title-h3">What Are The Prizes?</div>
                    Total prize pool is 1.000.000 TSH
                    <div style={{paddingLeft: '50px', paddingTop: '10px'}}>
                        <span style={{fontSize: '12px', textDecoration: 'underline'}}>
                            Position
                        </span><br/>
                        <div>
                            <span style={{marginRight: '56px', paddingLeft: '20px'}}>1</span><span>500.000 TSH</span>
                        </div>
                        <div>
                            <span style={{marginRight: '56px', paddingLeft: '20px'}}>2</span><span>200.000 TSH</span>
                        </div>
                        <div>
                            <span style={{marginRight: '56px', paddingLeft: '20px'}}>3</span><span>150.000 TSH</span>
                        </div>
                        <div>
                            <span style={{marginRight: '56px', paddingLeft: '20px'}}>4</span><span>100.000 TSH</span>
                        </div>
                        <div>
                            <span style={{marginRight: '60px', paddingLeft: '20px'}}>5</span><span>50.000 TSH</span>
                        </div>
                    </div>
                </p>
            </div>)
    }
}

const mapStateToProps = ({leaderboardPopupReducer, kenoLanguage}) => ({leaderboardPopupReducer, kenoLanguage});

const mapDispatchToProps = {hidePopup: () => hideLeaderboardPopup};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoardPopup);
