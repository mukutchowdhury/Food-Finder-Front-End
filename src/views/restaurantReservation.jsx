import React, { useState } from 'react';
//import '../styling/restaurantreservationStyle.css';

function RestaurantReservationView() {
    // forms
    const [formdata, setFormData] = useState({
        rest_name: '',
        rest_time: '',
        rest_partysize: '',
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
            rest_name: '',
            rest_time: '',
            rest_partysize: '',
        });
    };

    return (
        <div className="registration-form-container">
            <h2>Restaurant Reservation</h2>
            <form onSubmit={handleSubmit}>
            
                <label>
                    Your Name:
                    <input type="text" name="rest_name" value={formdata.rest_name} onChange={handleInput} />
                </label>
                <label>
                    Time of Reservation:
                    <input type="text" name="rest_address" value={formdata.rest_time} onChange={handleInput} />
                </label>
                <label>
                    How many people?:
                    <input type="text" name="rest_zipcode" value={formdata.rest_partysize} onChange={handleInput} />
                </label>
            </form>
        </div>
    );
}

export default RestaurantReservationView;