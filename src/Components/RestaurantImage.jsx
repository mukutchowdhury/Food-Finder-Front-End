import React from 'react';
import '../styling/restStyle.css'

const RestaurantImage = ({ imageUrl, altText }) => {
  return (
    <div className="restaurant-image">
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default RestaurantImage;
