import React, { useState } from 'react';
import '../styling/userStyle.css';

function UserView() {
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
        <div className="view-form-container">
            <h2>User Data</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    User ID
                    <input type="text" name="user_id" value={formdata.user_id} onChange={handleInput} />
                </label>
                <button type="submit">View User Data</button>
            </form>
        </div>
    );
}

export default UserView;
