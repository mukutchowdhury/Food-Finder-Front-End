import axios from 'axios';
import { useEffect, useState } from 'react';
import MyRestaurantCard from '../Components/MyRestaurantCard.jsx';
import { BACKEND_URL } from "../constants.js";
import '../styling/VendorForm.css';
import RestaurantEntry from './RestaurantEntry.jsx';
import MenuEntry from './MenuEntry.jsx';
import SettingNav from '../Components/setting-nav.jsx';
import { useNavigate } from 'react-router-dom';

const VendorForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingRestaurant, setEditingRestaurant] = useState(null);
    const [formData, setFormData] = useState([]);
    const [restaurant_id, setRestaurantId] = useState('');
    const [userId, setUserId] = useState(localStorage.getItem("userid"));
    const [formVisible, setFormVisible] = useState(false);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();


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
          navigate(0)
        } catch (error) {
          console.error('Error creating restaurant:', error);
        }
    };

    const arrayifyRestaurantsObject = () => {
        return Object.keys(formData);
    }

    const showFormRender = () => {
        setFormVisible(!formVisible)
    }


    return (
        <>
        <SettingNav />
        <div className="vendor-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="sidebar-header">
                    <h3>Options</h3>
                </div>
                <div className="options-box" onClick={showFormRender}>
                    <h4 className='select-none'>Create Restaurant</h4>
                </div>
                {formVisible && (
                    <div className='max-h-[21rem] overflow-y-scroll'>
                        <RestaurantEntry userId={userId} onCreateRestaurant={handleCreateRestaurant} />
                    </div>
                )}
            </div>
            {/* Main Content */}
            <div className="main-content">
                {message && <p>{message}</p>}
                <div className="centered-restaurant-boxes">
                    <div className="restaurant-row flex flex-col gap-5">
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
        </>
    );
};

export default VendorForm;