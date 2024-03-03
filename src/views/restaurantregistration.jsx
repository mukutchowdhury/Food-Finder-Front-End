import React, { useState } from 'react';
import '../styling/restaurantregistrationStyle.css';


function RestaurantRegistrationView(){
    // forms
    const[formdata, setformdata] = useState({
        rest_id : '',
        rest_name : '',
        rest_address : '',
        rest_zipcode: '',
        rest_owner_id: '',
        rest_image: ''
    });

    const handleInput = (e)=>{
        const{ name, value} = e.target;
        setformdata({
            ...formdata,
            [name]: value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formdata);
        setformdata({
            rest_id : '',
            rest_name : '',
            rest_address : '',
            rest_zipcode: '',
            rest_owner_id: '',
            rest_image: ''
        })
    }

    return (
        <div className="registration-form-container">
            <h2>Restaurant Registration</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Restaurant ID:
                    <input type="text" name="rest_id" value={formData.rest_id} onChange={handleInputChange} />
                </label>
                <label>
                    Restaurant Name:
                    <input type="text" name="rest_name" value={formData.rest_name} onChange={handleInputChange} />
                </label>
                <label>
                    Address:
                    <input type="text" name="rest_address" value={formData.rest_address} onChange={handleInputChange} />
                </label>
                <label>
                    Zip Code:
                    <input type="text" name="rest_zipcode" value={formData.rest_zipcode} onChange={handleInputChange} />
                </label>
                <label>
                    Owner ID:
                    <input type="text" name="rest_owner_id" value={formData.rest_owner_id} onChange={handleInputChange} />
                </label>
                <label>
                    Image URL:
                    <input type="text" name="rest_image" value={formData.rest_image} onChange={handleInputChange} />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RestaurantRegistrationView;