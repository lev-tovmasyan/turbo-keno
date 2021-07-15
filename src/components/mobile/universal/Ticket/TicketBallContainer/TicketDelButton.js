import React from 'react';
import images from '../../../../assets/images';
import {connect} from 'react-redux';
import {removeLastBtn} from '../../../../redux/actions/betBtnActions';

function TicketDelButton({removeLastBtn}) {

  return (
    <div className="game-grid__ticket-delete-button-container">
      <button className="game-grid__ticket-delete-button" onClick={removeLastBtn}>
        <img src={images.basket} alt="delete ticket button icon"/>
      </button>
    </div>
  );
}

const mapDispatchToProps = {
  removeLastBtn,
};

export default connect(null, mapDispatchToProps)(TicketDelButton);