import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BACKEND_URL } from "../constants.js";

function MenuView() {
  const { id } = useParams(); 
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/menu/${id}`);
        setMenuItems(response.data);
      } catch (error) {
        setError('Error fetching menu items');
      }
    };

    fetchMenuItems();
  }, [id]);

  return (
    <div className="menu-container">
      <h1 className="menu-title">Menu</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="menu-items">
        {menuItems.map(item => (
          <div key={item._id} className="menu-item">
            <h3>{item.item_name}</h3>
            <p>${item.item_price.toFixed(2)}</p>
            <p>Category: {item.item_category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuView;
