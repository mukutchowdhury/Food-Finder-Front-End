import React, { useState } from 'react';
//import '../styling/restaurantTrendingStyle.css';

function RestaurantTrendingView() {
    // forms
    const [formdata, setFormData] = useState({
        rest_id: '',

    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formdata,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
        setFormData({
            rest_id: '',
        });
    };

    return (
        <div className="deletion-form-container">
            <h2>Trending Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Restaurant ID:
                    <input type="text" name="rest_id" value={formdata.rest_id} onChange={handleInput} />
                </label>
                <button type="submit">Add to Trending</button>
            </form>
        </div>
    );
}

export default RestaurantTrendingView;
