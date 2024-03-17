import React, { useState } from 'react';
import './vendorForm.css';

const VendorForm = () => {
    const [showForm, setShowForm] = useState(false);

    const handleEditClick = () => {
        setShowForm(true);
    };

    return (
        <div className="vendor-form-container">
            <h2>Restaurant Information</h2>
            <div className="restaurant-box">
                <p>Restaurant Name: Restaurant Name 1</p>
                <p>Address: 123 Main St</p>
                <p>Phone: (123) 456-7890</p>
                <button className="edit-btn" onClick={handleEditClick}>Edit</button>
            </div>

            {showForm && (
                <form className="edit-form">
                    <h2>Edit Restaurant</h2>
                    <label htmlFor="editName">Name:</label><br />
                    <input type="text" id="editName" name="editName" /><br />
                    <label htmlFor="editAddress">Address:</label><br />
                    <input type="text" id="editAddress" name="editAddress" /><br />
                    <label htmlFor="editPhone">Phone:</label><br />
                    <input type="text" id="editPhone" name="editPhone" /><br /><br />
                    <button type="submit">Save Changes</button>
                </form>
            )}
        </div>
    );
};

export default VendorForm;
