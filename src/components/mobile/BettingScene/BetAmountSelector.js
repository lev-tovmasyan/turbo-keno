import React from 'react';
import images from '../../assets/images';
import {connect} from 'react-redux';
import {setBetAmount} from '../../redux/actions/betAmoutActions';

function BetAmountSelector({betAmountOption, betAmount, setBetAmount}) {

    const {maxBet, minBet, betStep} = betAmountOption;

    return (
        <div
            className="game-grid__keno-game-config-button-container game-grid__keno-game-config-button-container--bet-amount">
            <button onClick={clickHandler} value={false}
                    className="game-grid__keno-game-bet-amount-button game-grid__keno-game-bet-amount-button--minus">
                <img src={images.minus} alt="reduce the bet" className="game-grid__keno-game-bet-amount-button-img"/>
            </button>
            <div className="game-grid__keno-game-bet-amount">
                <input className='amountInp' type="number" value={betAmount} onChange={changeAmount}
                       onBlur={handleResetAmount}
                />
            </div>

            <button onClick={clickHandler} value={true}
                    className="game-grid__keno-game-bet-amount-button game-grid__keno-game-bet-amount-button--plus">
                <img src={images.plus} alt="increase the bet" className="game-grid__keno-game-bet-amount-button-img"/>
            </button>
        </div>
    );

    function changeAmount({target: {value}}) {
        const targetStr = value.toString();
        const regex = /^[0-9]{0,9}?\d*\.?\d*$/;
        const valid = regex.test(targetStr);
        if (!valid || targetStr[0] === '0'
            || targetStr[0] === '.'
            || (targetStr.split('.').length > 1
                && targetStr.split('.')[1].length > 2)) {
            return (+targetStr).toFixed(2)
        }

        targetStr <= maxBet ? setBetAmount(targetStr) : setBetAmount(maxBet);
    }

    function handleResetAmount() {
        if (betAmount < minBet) {
            setBetAmount(minBet);
        }
    }

    function clickHandler(e) {
        const isPlusClicked = JSON.parse(e.currentTarget.value);

        if (isPlusClicked && betAmount < maxBet) {
            setBetAmount(+betAmount + betStep);
        }
        if (!isPlusClicked && betAmount > minBet) {
            setBetAmount(betAmount - betStep);
        }
    }
}

const mapStateToProps = ({betAmountOptionReducer, betAmountReducer}) => ({
    betAmountOption: betAmountOptionReducer,
    betAmount: betAmountReducer
});

const mapDispatchToProps = {setBetAmount};

export default connect(mapStateToProps, mapDispatchToProps)(BetAmountSelector);
