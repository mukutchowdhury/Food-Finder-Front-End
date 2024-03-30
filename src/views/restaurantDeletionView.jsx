import React, { useState } from 'react';
import '../styling/restaurantDeletionStyle.css';

function RestaurantDeletionView() {
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
            <h2>Restaurant Deletion</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Restaurant ID:
                    <input type="text" name="rest_id" value={formdata.rest_id} onChange={handleInput} />
                </label>
                <button type="submit">Delete Permanently</button>
            </form>
        </div>
    );
}

export default RestaurantDeletionView;
