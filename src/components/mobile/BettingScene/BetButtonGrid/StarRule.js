import React from 'react';
import images from '../../../assets/images';
import {connect} from 'react-redux';

function StarRule({betBtnCount, tickets}) {

  const isStarHidden = betBtnCount > 0 || !!tickets.length;

  return (
    <div className={`game-grid__keno-bet-buttons-rule${isStarHidden ? ' hidden' : ''}`}>
      <img src={images.star_one_to_ten} alt="bet rule"/>
    </div>
  );
}

const mapStateToProps = ({betBtnsReducer, ticketReducer}) => ({
  betBtnCount: betBtnsReducer.length,
  tickets: ticketReducer
});

export default connect(mapStateToProps, null)(StarRule);