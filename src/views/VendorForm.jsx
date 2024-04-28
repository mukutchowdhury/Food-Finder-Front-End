import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BACKEND_URL } from "../constants.js";
import '../styling/VendorForm.css';

const VendorForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingRestaurant, setEditingRestaurant] = useState(null);
    const [formData, setFormData] = useState({
        restaurant_id: null,
        name: '',
        address: '',
        zipcode: '',
        owner_id: '',
        image: '',
        phone: '',
        cuisine: '',
        keywords: '',
        category: '',
        hours: ''
    });

    useEffect(() => {
        const fetchRestaurantData = async () => {
            try {
                if (editingRestaurant) {
                    const response = await axios.get(`${BACKEND_URL}/restaurants/${editingRestaurant}`);
                    setFormData({
                        restaurant_id: response.data.RESTAURANT_ID,
                        name: response.data.NAME,
                        address: response.data.ADDRESS,
                        zipcode: response.data.ZIPCODE,
                        owner_id: response.data.OWNER_ID,
                        image: response.data.IMAGE,
                        phone: response.data.PHONE,
                        cuisine: response.data.CUISINE,
                        keywords: response.data.KEYWORDS,
                        category: response.data.CATEGORY,
                        hours: response.data.HOURS
                    });
                    setShowForm(true);
                }
            } catch (error) {
                console.error('Error fetching restaurant data:', error);
            }
        };
        fetchRestaurantData();
    }, [editingRestaurant]);

    const handleEditClick = (restaurant) => {
        setEditingRestaurant(restaurant);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingRestaurant) {
                await axios.put(`/api/restaurants/${editingRestaurant}`, formData);
                console.log('Restaurant updated');
            } else {
                await axios.post(`/api/restaurants`, formData);
                console.log('New restaurant created');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleCreateRestaurant = async () => {
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
                    <div className="options-box" onClick={handleCreateRestaurant}>
                        <h4>Create Restaurant</h4>
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Edit Form */}
            {showForm && (
                <form className="edit-form" onSubmit={handleFormSubmit}>
                    <h2>{editingRestaurant ? 'Edit Restaurant' : 'Create Restaurant'}</h2>
                    <label htmlFor="editName">Name:</label><br />
                    <input type="text" id="editName" name="name" value={formData.name} onChange={handleInputChange} /><br />
                    <label htmlFor="editAddress">Address:</label><br />
                    <input type="text" id="editAddress" name="address" value={formData.address} onChange={handleInputChange} /><br />
                    <label htmlFor="editPhone">Phone:</label><br />
                    <input type="text" id="editPhone" name="phone" value={formData.phone} onChange={handleInputChange} /><br /><br />
                    <button type="submit">{editingRestaurant ? 'Save Changes' : 'Create Restaurant'}</button>
                </form>
            )}
        </div>
    );
};

export default VendorForm;
