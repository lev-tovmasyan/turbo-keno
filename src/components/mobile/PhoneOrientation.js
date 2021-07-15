import React from 'react';
import images from '../assets/images';

function PhoneOrientation() {
  return (
    <div className="orientation">
      <img src={images.phone} alt="phone svg" className="orientation-img"/>
    </div>
  );
}

export default PhoneOrientation;