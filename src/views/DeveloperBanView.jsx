import React, { useState } from 'react';
import '../styling/DeveloperBanViewStyle.css';

function DeveloperBanView() {
    // forms
    const [formdata, setFormData] = useState({
        user_id: '',

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
            user_id: '',
        });
    };

    return (
        <div className="deletion-form-container">
            <h2>Ban User Permanently</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    User ID:
                    <input type="text" name="user_id" value={formdata.user_id} onChange={handleInput} />
                </label>
                <button type="submit">Ban User Permanently</button>
            </form>
        </div>
    );
}

export default DeveloperBanView;
