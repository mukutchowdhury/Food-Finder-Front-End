import React, { useState } from 'react';
import '../styling/restaurantHourStyle.css';

function RestaurantHourView() {
    // forms
    const [formdata, setFormData] = useState({
        rest_id: '',
        rest_open_hour: '',
        rest_open_minute: '',
        rest_close_hour: '',
        rest_close_minute: '',
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
            rest_open_hour: '',
            rest_open_minute: '',
            rest_close_hour: '',
            rest_close_minute: '',
        });
    };

    return (
        <div className="registration-form-container">
            <h2>Restaurant Hours</h2>
            <form onSubmit={handleSubmit}>
            
                <label>
                    Your Resturant ID:
                    <input type="text" name="rest_id" value={formdata.rest_id} onChange={handleInput} />
                </label>
                <label>
                    Open Hour:
                    <input type="text" name="rest_open_hour" value={formdata.rest_open_hour} onChange={handleInput} />
                </label>
                <label>
                    Open Minute:
                    <input type="text" name="rest_open_minute" value={formdata.rest_open_minute} onChange={handleInput} />
                </label>
            </form>
        </div>
    );
}

export default RestaurantHourView;