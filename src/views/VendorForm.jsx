import React, { useState } from 'react';
import '../styling/VendorForm.css';

const VendorForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingRestaurant, setEditingRestaurant] = useState(null);

    const handleEditClick = (restaurant) => {
        setEditingRestaurant(restaurant);
        setShowForm(true);
    };

    const handleMenuItemClick = () => {
        console.log('Create menu item for restaurant:', editingRestaurant);
    };

    return (
        <div className="vendor-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="sidebar-header">
                    <h3>Options</h3>
                </div>
                <div className="options-boxes">
                    <div className="options-box">
                        <h4>Restaurant Management</h4>
                    </div>
                    <div className="options-box">
                        <h4>Review Management</h4>
                    </div>
                    <div className="options-box">
                        <h4>Reservation Management</h4>
                    </div>
                    <div className="options-box">
                        <h4>Analysis</h4>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <h2>Active Restaurants</h2>
                <div className="centered-restaurant-boxes">
                    <div className="restaurant-row">
                        {/* Restaurant Cards */}
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="restaurant-box">
                                <p>Restaurant Name: Restaurant Name {index + 1}</p>
                                <p>Address: {index + 1}23 Main St</p>
                                <p>Phone: ({index + 1}23) 456-7890</p>
                                <p>Opening Hours: Monday-Saturday: 9am-10pm, Sunday: 10am-8pm</p>
                                <p>Cuisine Type: Italian</p>
                                <button className="edit-btn" onClick={() => handleEditClick(`Restaurant Name ${index + 1}`)}>Edit</button>
                                <button className="edit-btn" onClick={handleMenuItemClick}>Create Menu Item</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Edit Form */}
            {showForm && (
                <form className="edit-form">
                    <h2>{editingRestaurant}</h2>
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
