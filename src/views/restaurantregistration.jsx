import React, { useState } from 'react';
import '../styling/restaurantregistrationStyle.css';

function RestaurantRegistrationView() {
    // forms
    const [formdata, setFormData] = useState({
        rest_id: '',
        rest_name: '',
        rest_address: '',
        rest_zipcode: '',
        rest_owner_id: '',
        rest_image: ''
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
            rest_name: '',
            rest_address: '',
            rest_zipcode: '',
            rest_owner_id: '',
            rest_image: ''
        });
    };

    return (
        <div className="registration-form-container">
            <h2>Restaurant Registration</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Restaurant ID:
                    <input type="text" name="rest_id" value={formdata.rest_id} onChange={handleInput} />
                </label>
                <label>
                    Restaurant Name:
                    <input type="text" name="rest_name" value={formdata.rest_name} onChange={handleInput} />
                </label>
                <label>
                    Address:
                    <input type="text" name="rest_address" value={formdata.rest_address} onChange={handleInput} />
                </label>
                <label>
                    Zip Code:
                    <input type="text" name="rest_zipcode" value={formdata.rest_zipcode} onChange={handleInput} />
                </label>
                <label>
                    Owner ID:
                    <input type="text" name="rest_owner_id" value={formdata.rest_owner_id} onChange={handleInput} />
                </label>
                <label>
                    Image:
                    <input type="text" name="rest_image" value={formdata.rest_image} onChange={handleInput} />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RestaurantRegistrationView;
