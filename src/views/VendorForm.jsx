import React, { useState } from 'react';
import '../styling/VendorForm.css';

const VendorForm = () => {
    const [showForm, setShowForm] = useState(false);

    const handleEditClick = () => {
        setShowForm(true);
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
                        {/* Restaurant 1 */}
                        <div className="restaurant-box">
                            <p>Restaurant Name: Restaurant Name 1</p>
                            <p>Address: 123 Main St</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Opening Hours: Monday-Saturday: 9am-10pm, Sunday: 10am-8pm</p>
                            <p>Cuisine Type: Italian</p>
                            <button className="edit-btn" onClick={handleEditClick}>Edit</button>
                        </div>
                        {/* Restaurant 2 */}
                        <div className="restaurant-box">
                            <p>Restaurant Name: Restaurant Name 2</p>
                            <p>Address: 456 Elm St</p>
                            <p>Phone: (456) 789-0123</p>
                            <p>Opening Hours: Monday-Saturday: 8am-11pm, Sunday: 11am-7pm</p>
                            <p>Cuisine Type: Mexican</p>
                            <button className="edit-btn" onClick={handleEditClick}>Edit</button>
                        </div>
                        {/* Restaurant 3 */}
                        <div className="restaurant-box">
                            <p>Restaurant Name: Restaurant Name 3</p>
                            <p>Address: 3546 Jackson Ave</p>
                            <p>Phone: (646) 654-6546</p>
                            <p>Opening Hours: Monday-Saturday: 8am-11pm, Sunday: 11am-7pm</p>
                            <p>Cuisine Type: Thai</p>
                            <button className="edit-btn" onClick={handleEditClick}>Edit</button>
                        </div>
                    </div>
                

                    <div className="restaurant-row">
                        {/* Restaurant 4 */}
                        <div className="restaurant-box">
                            <p>Restaurant Name: Restaurant Name 4</p>
                            <p>Address: 123 Pine St</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Opening Hours: Monday-Saturday: 9am-8pm, Sunday: Closed</p>
                            <p>Cuisine Type: French</p>
                            <button className="edit-btn" onClick={handleEditClick}>Edit</button>
                        </div>
                        {/* Restaurant 5 */}
                        <div className="restaurant-box">
                            <p>Restaurant Name: Restaurant Name 5</p>
                            <p>Address: 456 Maple St</p>
                            <p>Phone: (456) 789-0123</p>
                            <p>Opening Hours: Monday-Saturday: 10am-10pm, Sunday: 12pm-9pm</p>
                            <p>Cuisine Type: Japanese</p>
                            <button className="edit-btn" onClick={handleEditClick}>Edit</button>
                        </div>
                        {/* Restaurant 6 */}
                        <div className="restaurant-box">
                            <p>Restaurant Name: Restaurant Name 6</p>
                            <p>Address: 789 Cedar St</p>
                            <p>Phone: (789) 012-3456</p>
                            <p>Opening Hours: Monday-Saturday: 11am-9pm, Sunday: 1pm-8pm</p>
                            <p>Cuisine Type: American</p>
                            <button className="edit-btn" onClick={handleEditClick}>Edit</button>
                        </div>
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
