import React from 'react';
import './ProductShow.css';
import capimg1 from '../../assets/others/Productshow/image1.png';
import capimg2 from '../../assets/others/Productshow/image2.webp';
import capimg3 from '../../assets/others/Productshow/image3.png';
import capimg4 from '../../assets/others/Productshow/image4.png';
import capimg5 from '../../assets/others/Productshow/image5.png';
import capsule1 from '../../assets/others/Productshow/image11.png';

import feiimg3 from '../../assets/others/Productshow/image7.png';
import feimg2 from '../../assets/others/Productshow/image8.png';
import feimg4 from '../../assets/others/Productshow/image9.png';
import modeimg from '../../assets/others/Productshow/backimage.jpg';

const ProductShow = () => {
  const images = [
    capimg1, capimg2, capimg3, capimg4, capimg5,
    capsule1, feiimg3, feimg2, feimg4
  ];

  return (
    <div className="ps-banner" style={{ '--bg-image': `url(${modeimg})` }} >
      <div className="ps-slider" style={{ '--quantity': images.length }}>
        {images.map((img, index) => (
          <div className="ps-slider-item" style={{ '--position': index + 1 }} key={index}>
            <img src={img} alt={`slider-${index}`} />
          </div>
        ))}
      </div>
      <div className="ps-content">
        <h2 className="ps-title" data-content="Fresh Cart" style={{zIndex:"99"}}>Fresh Cart</h2>
        <div className="ps-author">
          <h2>Frontend Ace</h2>
          <p><b>Skip the Line - Freshness is Online</b></p>
          {/* <p>Subscribe to the channel to watch many interesting videos</p> */}
        </div>
        <div className="ps-model"></div>
      </div>
    </div>
  );
};

export default ProductShow;
