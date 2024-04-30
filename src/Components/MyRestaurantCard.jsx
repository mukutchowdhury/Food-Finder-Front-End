import React from 'react';

const MyRestaurantCard = (props) => {
    const { restaurant_id, name, address, zipcode, phone } = props.restaurant;

    return (
        <div className="restaurant-box">
            <p>Restaurant Name: {name}</p>
            <p>Address: {address}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default MyRestaurantCard;
