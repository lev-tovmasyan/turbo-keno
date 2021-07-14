import React from "react";
import {connect} from 'react-redux';
import {setSelectedAmount} from "../../../redux/actions/amountActions";
import {useLanguageData} from "../../../Context/LanguageContext";

const BetAmountInput = ({selectedAmount, setSelectedAmount, betAmountOption}) => {
    const languageData = useLanguageData()

    const handleSetAmount = ({target: {value}}) => {
        const targetStr = value.toString();
        const regex = /^[0-9]{0,9}?\d*\.?\d*$/;
        const valid = regex.test(targetStr);
        if (!valid || targetStr[0] === '0'
            || targetStr[0] === '.'
            || (targetStr.split('.').length > 1
                && targetStr.split('.')[1].length > 2)) {
            return (+targetStr).toFixed(2)
        }
        targetStr <= betAmountOption.maxBet ? setSelectedAmount(targetStr) : setSelectedAmount(betAmountOption.maxBet);
    };

    const deleteAmount = () => {
        const targetStr = selectedAmount.toString().slice(0, selectedAmount.length - 1);
        setSelectedAmount(targetStr);
    }

    const handleResetAmount = () => {
        if (selectedAmount < betAmountOption.minBet) {
            setSelectedAmount(betAmountOption.minBet);
        }
    };

    return (
        <div className={`input-controls__container ${selectedAmount ? 'active' : ''}`}>
            <label className="input-controls__input-label">
                <input type="text" className="input-controls__input"
                       value={selectedAmount}
                       onChange={handleSetAmount}
                       onBlur={handleResetAmount}
                />
            </label>
            <button className="input-controls__clear-input-button" onClick={deleteAmount}>
                {languageData.clear}
            </button>
        </div>
    );
};

const mapStateToProps = ({selectedAmount, betAmountOptionReducer}) => ({
    selectedAmount,
    betAmountOption: betAmountOptionReducer
});

const mapDispatchToProps = {
    setSelectedAmount
};

export default connect(mapStateToProps, mapDispatchToProps)(BetAmountInput);
