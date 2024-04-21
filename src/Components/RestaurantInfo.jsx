import React from 'react';
import '../styling/restStyle.css';
import Stars from './Stars';

const RestaurantInfo = ({ name, rating, address, hours, phone }) => {
  return (
    <div className="restaurant-info">
      <h2 className="restaurant-name">{name}</h2>
      <div className="rating">Average Rating: <Stars rating={rating} /></div>
      <div className="address">Address: {address}</div>
      <div className="hours">Business Hours: {hours}</div>
      <div className="phone-number">Phone Number: {phone}</div>
    </div>
  );
};

export default RestaurantInfo;
