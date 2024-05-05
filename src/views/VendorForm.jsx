import axios from 'axios';
import { useEffect, useState } from 'react';
import MyRestaurantCard from '../Components/MyRestaurantCard.jsx';
import { BACKEND_URL } from "../constants.js";
import '../styling/VendorForm.css';
import RestaurantEntry from './RestaurantEntry.jsx';
import MenuEntry from './MenuEntry.jsx';

const VendorForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingRestaurant, setEditingRestaurant] = useState(null);
    const [formData, setFormData] = useState([]);
    const [restaurant_id, setRestaurantId] = useState('');
    const [userId, setUserId] = useState(localStorage.getItem("userid"));
    const [formVisible, setFormVisible] = useState(false);


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

    const handleCreateRestaurant = async (restaurantData) => {
        try {
          await axios.post(`${BACKEND_URL}/restaurants/register`, restaurantData);
          console.log('Restaurant created successfully:', restaurantData);
        } catch (error) {
          console.error('Error creating restaurant:', error);
        }
      };

    const handleDeleteRestaurant = async () => {
        try {
            await axios.delete(`${BACKEND_URL}/restaurants/${restaurant_id}`);
            const response = await axios.get(`${BACKEND_URL}/restaurant/${restaurant_id}`);
            setFormData(response.data.review); 
            setRestaurantId('');
        } catch (error) {
            setError('Could not delete the restaurant');
        }
        console.log('Deleting an existing restaurant');
    };

    const arrayifyRestaurantsObject = () => {
        return Object.keys(formData);
    }


    return (
        <div className="vendor-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="sidebar-header">
                    <h3>Options</h3>
                </div>
                <div className="options-box" onClick={() => setFormVisible(true)}>
                    <h4>Create Restaurant</h4>
                </div>
                {formVisible && (
                    <RestaurantEntry userId={userId} onCreateRestaurant={handleCreateRestaurant} />
                )}
                </div>
                <div className="options-boxes">
                    <div className="options-box" onClick={handleDeleteRestaurant}>
                        <h4>Delete Restaurant</h4>
                    </div>
                    <div className="delete-review-container">
                    <input 
                        type="text"
                        placeholder="Enter Restaurant ID "
                        value={restaurant_id}
                        onChange={e => setRestaurantId(e.target.value)}
                    />
                    <button onClick={handleDeleteRestaurant}>Confirm</button>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <h2>Active Restaurants</h2>
                <div className="centered-restaurant-boxes">
                    <div className="restaurant-row">
                    {arrayifyRestaurantsObject().map((item, index) => {
                        if (userId === formData[item].owner_id) {
                            return (
                                <MyRestaurantCard
                                    key={index}
                                    restaurant={formData[item]}
                                />
                            );
                        }
                        return null; 
                    })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorForm;