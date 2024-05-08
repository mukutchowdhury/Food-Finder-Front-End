import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyRestaurantCard from '../Components/MyRestaurantCard.jsx';
import MenuItemCard from '../Components/MenuItemCard';
import { BACKEND_URL } from "../constants.js";
import '../styling/VendorForm.css';
import MenuEntry from './MenuEntry.jsx';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SettingNav from '../Components/setting-nav.jsx';


const VendorMenu = () => {
    const { restaurantId } = useParams();
    const [message, setMessage] = useState('');
    const [menuItems, setMenuItems] = useState([]);
    const navigate = useNavigate();

    const [redirect, setRedirect] = useState(true);
    useEffect(() => {
        const id = localStorage.getItem('userid');
        if (id === null) {
            navigate('/home');
            setRedirect(true);
        } else {
            setRedirect(false)
        }
    }, [navigate]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}menu/${restaurantId}`);
                console.log(response.data);
                setMenuItems(response.data);
            } catch (error) {
                console.error('Error fetching menu items:', error);
                setMessage('Failed to load menu items');
            }
        };

        fetchMenuItems();
    }, [restaurantId]);

    const handleAddMenuItem = async (menuData) => {
        try {
            const response = await axios.post(`${BACKEND_URL}menu/${restaurantId}`, menuData);
            setMenuItems(prevItems => [...prevItems, response.data]); 
            setMessage('Menu item added successfully');
            navigate(0);
        } catch (error) {
            console.error('Error adding menu item:', error);
            setMessage('Error adding menu item');
        }
    };

    const handleDeleteMenuItem = async (menuItemId) => {
        try {
            await axios.delete(`${BACKEND_URL}menu/${menuItemId}`);
            setMenuItems(prevItems => prevItems.filter(item => item.id !== menuItemId));
            setMessage('Menu item deleted successfully');
            navigate(0);
        } catch (error) {
            console.error('Error deleting menu item:', error);
            setMessage('Error deleting menu item');
        }
    };

    if (!redirect) {
        return (
            <>
                <SettingNav />
                <div className="vendor-container">
                    {/* Sidebar */}
                    <div className="sidebar">
                        <div className="sidebar-header">
                            <h3>Options</h3>
                        </div>
                        {restaurantId && (
                            <MenuEntry onCreateMenuItem={handleAddMenuItem} restaurantId={restaurantId} />
                        )}
                    </div>
                    {/* Main Content */}
                    <div className="main-content">
                        {message && <p>{message}</p>}
                        <div className="menu-items-container">
                        {menuItems.length > 0 ? (
                            menuItems.map((item) => (
                                <MenuItemCard key={item.id} menuItem={item} onDelete={handleDeleteMenuItem} />
                                ))
                            ) : (
                                <p>No menu items found.</p>
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return null;
};

export default VendorMenu;