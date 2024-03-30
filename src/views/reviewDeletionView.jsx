import React, { useState } from 'react';
import '../styling/reviewDeletionStyle.css';

function ReviewDeletionView() {
    // forms
    const [formdata, setFormData] = useState({
        review_id: '',

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
            review_id: '',
        });
    };

    return (
        <div className="deletion-form-container">
            <h2>Review Deletion</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Review ID:
                    <input type="text" name="review_id" value={formdata.review_id} onChange={handleInput} />
                </label>
                <button type="submit">Delete Review Permanently</button>
            </form>
        </div>
    );
}

export default ReviewDeletionView;
