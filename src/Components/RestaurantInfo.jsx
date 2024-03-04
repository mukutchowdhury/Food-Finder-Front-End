import React from 'react';
import '../styling/restStyle.css'

const RestaurantInfo = ({ name, rating, address, hours }) => {
  return (
    <div className="restaurant-info">
      <h2 className="restaurant-name">{name}</h2>
      <div className="rating">{`Rating: ${rating}`}</div>
      <div className="address">{`Address: ${address}`}</div>
      <div className="hours">{`Hours: ${hours}`}</div>
    </div>
  );
};

export default RestaurantInfo;
