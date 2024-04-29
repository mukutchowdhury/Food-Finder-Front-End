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
                        {/* {[...Array(6)].map((_, index) => (
                            //<MyRestaurantCard/>
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorForm;
