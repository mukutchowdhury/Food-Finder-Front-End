import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyRestaurantCard from '../Components/MyRestaurantCard.jsx';
import MenuItemCard from '../Components/MenuItemCard';
import { BACKEND_URL } from "../constants.js";
import '../styling/VendorForm.css';
import MenuEntry from './MenuEntry.jsx';
import { useParams } from 'react-router-dom';


const VendorMenu = () => {
    const { restaurantId } = useParams();
    const [message, setMessage] = useState('');
    const [menuItems, setMenuItems] = useState([]);
    const [menuItemToDelete, setMenuItemToDelete] = useState('');


    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}menu/${restaurantId}`);
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
            const response = await axios.post(`${BACKEND_URL}/menu/${restaurantId}`, menuData);
            setMenuItems(prevItems => [...prevItems, response.data]); 
            setMessage('Menu item added successfully');
        } catch (error) {
            console.error('Error adding menu item:', error);
            setMessage('Error adding menu item');
        }
    };

    const handleDeleteMenuItem = async (menuItemId) => {
        try {
            await axios.delete(`${BACKEND_URL}/menu/${menuItemId}`);
            setMenuItems(prevItems => prevItems.filter(item => item.id !== menuItemId));
            setMessage('Menu item deleted successfully');
        } catch (error) {
            console.error('Error deleting menu item:', error);
            setMessage('Error deleting menu item');
        }
    };


    return (
        <div className="vendor-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="sidebar-header">
                    <h3>Options</h3>
                </div>
                {restaurantId && (
                    <MenuEntry restaurantId={restaurantId} onSubmit={handleAddMenuItem} />
                )}
                <div className="delete-review-container">
                    <input 
                        type="text"
                        placeholder="Enter Menu Item ID"
                        value={menuItemToDelete}
                        onChange={e => setMenuItemToDelete(e.target.value)}
                    />
                    <button onClick={handleDeleteMenuItem}>Delete Menu Item</button>
                </div>
            </div>
            {/* Main Content */}
            <div className="main-content">
                {message && <p>{message}</p>}
                <div className="menu-items-container">
                    {menuItems.map((item) => (
                        <MenuItemCard key={item.id} menuItem={item} onDelete={handleDeleteMenuItem} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VendorMenu;