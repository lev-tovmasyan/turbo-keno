import React from 'react';

const DrawHistoryCurrentTicketNumber = ({digit}) => {

  return (
    <li className="current-ticket__number">
      <div className="current-ticket__number-text">
        <div className="current-ticket__number-text-wrapper">
          {digit}
        </div>
      </div>
    </li>
  );
};

export default DrawHistoryCurrentTicketNumber;