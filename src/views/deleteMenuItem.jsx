import React, { useState } from 'react';
// import '../styling/deleteMenuItem.css';

function deleteMenuItemView() {
    // forms
    const [formdata, setFormData] = useState({
        menuitem_id: '',

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
            menuitem_id: '',
        });
    };

    return (
        <div className="deletion-form-container">
            <h2>Menu item Deletion</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Menu Item ID:
                    <input type="text" name="menuitem_id" value={formdata.menuitem_id} onChange={handleInput} />
                </label>
                <button type="submit">Delete Item Permanently</button>
            </form>
        </div>
    );
}

export default deleteMenuItemView;