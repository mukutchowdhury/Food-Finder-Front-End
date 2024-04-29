import axios from 'axios';
import { useEffect, useState } from 'react';
import { BACKEND_URL } from "../constants.js";
import '../styling/VendorForm.css';

const VendorForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingRestaurant, setEditingRestaurant] = useState(null);
    const [formData, setFormData] = useState({
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

    const userId = localStorage.getItem("userid");
    console.log(userId);
    useEffect(() => {
        const fetchRestaurantData = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/restaurants/all`);
                //setFormData(response.data);
                //setShowForm(true);
                setFormData(response.data); // Set all restaurant data
                setShowForm(true); //show form after fetching the data
            } catch (error) {
                console.error('Error fetching restaurant data:', error);
            }
        };
        fetchRestaurantData();
    }, []);

    const handleEditClick = (restaurantName) => {
        // Logic for handling edit click
        console.log(`Editing restaurant: ${restaurantName}`);
    };

    const handleCreateRestaurant = () => {
        // Logic for handling create restaurant click
        console.log('Creating new restaurant');
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
                        {formData.map((restaurant, index) => (
                            <MyRestaurantCard
                                key={index}
                                restaurant={restaurant}
                                handleEditClick={handleEditClick}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorForm;