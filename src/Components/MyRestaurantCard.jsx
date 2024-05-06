import React from 'react';
import { Link } from 'react-router-dom'; 

const MyRestaurantCard = ({ restaurant }) => {
    const { restaurant_id, name, address, zipcode, phone } = restaurant;

    return (
        <div className="restaurant-box">
            <Link to={`/vendor/${restaurant_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <p>Restaurant Name: {name}</p>
                <p>Address: {address}</p>
                <p>Zipcode: {zipcode}</p>
                <p>Phone: {phone}</p>
            </Link>
        </div>
    );
};


export default MyRestaurantCard;
