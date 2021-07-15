import React from 'react';
import images from '../../assets/images';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { useLanguageData } from '../../Context/LanguageContext';

UserData.propTypes = {
  money: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

function UserData({money, id, currency}) {

  const languageData = useLanguageData()

  return (
    <div className="game-grid__header-left">
      <div className="game-grid__amount">
				<span className="game-grid__amount-value">
					{money} {currency}
				</span>
      </div>
      <div className="game-grid__account-info">
        <div className="game-grid__account-info-icon">
          <img src={images.id} alt="id decoration"/>
        </div>
        <div className="game-grid__account-info-id">
          {languageData['ID']}: {id}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({currencyReducer}) => ({
  currency: currencyReducer
});

export default connect(mapStateToProps)(UserData);
