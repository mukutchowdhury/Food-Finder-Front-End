import React, { useState } from 'react';
import '../styling/VendorForm.css';

const VendorForm = () => {
    const [showForm, setShowForm] = useState(false);

    const handleEditClick = () => {
        setShowForm(true);
    };

    return (
        <div className="vendor-container">
            <div className="sidebar">
                <div className="sidebar-header">
                    <h3>Options</h3>
                </div>
                <ul className="options-list">
                    <li>Restaurant Management</li>
                    <li>Review Management</li>
                    <li>Reservation Management</li>
                    <li>Analysis</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <h2>Active Restaurants</h2>
                <div className="restaurant-boxes">
                    {/* Box 1 */}
                    <div className="restaurant-box">
                        <p>Restaurant Name: Restaurant Name 1</p>
                        <p>Address: 123 Main St</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Opening Hours: Monday-Saturday: 9am-10pm, Sunday: 10am-8pm</p>
                        <p>Cuisine Type: Italian</p>
                        <button className="edit-btn" onClick={handleEditClick}>Edit</button>
                    </div>
                </div>
            </div>

            {/* Edit Form */}
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
