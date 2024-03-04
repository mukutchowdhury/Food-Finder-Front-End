import React, { useState } from 'react';
//import '../styling/restaurantreviewStyle.css';

function RestaurantReviewView() {
    // forms
    const [formdata, setFormData] = useState({
        rest_id: '',
        rest_name: '',
        rest_rating: '',
        rest_comment: '',
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
            rest_rating: '',
            rest_comment: '',
        });
    };

    return (
        <div className="registration-form-container">
            <h2>Restaurant Review</h2>
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
                    Rating:
                    <input type="text" name="rest_address" value={formdata.rest_rating} onChange={handleInput} />
                </label>
                <label>
                    Comment:
                    <input type="text" name="rest_zipcode" value={formdata.rest_comment} onChange={handleInput} />
                </label>
            </form>
        </div>
    );
}

export default RestaurantReviewView;
