import React from 'react';

const MyRestaurantCard = ({ restaurant, handleEditClick }) => {
    const { name, address, phone, openingHours, cuisine } = restaurant;

    return (
        <div className="restaurant-box">
            <p>Restaurant Name: {name}</p>
            <p>Address: {address}</p>
            <p>Phone: {phone}</p>
            <p>Opening Hours: {openingHours}</p>
            <p>Cuisine Type: {cuisine}</p>
            <button className="edit-btn" onClick={() => handleEditClick(name)}>Edit</button>
        </div>
    );
};

export default MyRestaurantCard;
