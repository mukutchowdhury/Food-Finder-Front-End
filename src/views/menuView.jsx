import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SettingNav from '../Components/setting-nav.jsx';
import { BACKEND_URL } from "../constants.js";
import '../styling/menuStyle.css';

function MenuView() {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const groupByCategory = (items) => {
    return items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
  };
  
  const sortItemsInGroups = (groupedItems) => {
    Object.keys(groupedItems).forEach(category => {
      groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
    });
    return groupedItems;
  };  

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/menu/${id}`);
        const groupedAndSorted = sortItemsInGroups(groupByCategory(response.data));
        setMenuItems(groupedAndSorted);
      } catch (error) {
        setError('Error fetching menu items');
      }
    };

    fetchMenuItems();
  }, [id]);

  const filterItemsBySearchTerm = () => {
    const filtered = {};
    Object.keys(menuItems).forEach(category => {
      filtered[category] = menuItems[category].filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    return filtered;
  };

  const filteredMenuItems = searchTerm ? filterItemsBySearchTerm() : menuItems;

  return (
    <>
      <SettingNav />
      <div className="app">
        <div className="menu-container">
          <h1 className="menu-title">Menu</h1>
          {error && <p className="error-message">{error}</p>}
          <input
            type="text"
            placeholder="Search for menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="menu-items">
            {Object.keys(filteredMenuItems).map((category) => (
              <div key={category}>
                <div className="category-container">
                  {filteredMenuItems[category].map(item => (
                    <div key={item._id} className="menu-item">
                      <div className="menu-item-image-container">
                        <img src={item.image} alt={item.name} className="menu-item-image" />
                      </div>
                      <div className="item-details">
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Description:</strong> {item.description}</p>
                        <p><strong>Price:</strong> ${parseFloat(item.price).toFixed(2)}</p>
                        <p><strong>Category:</strong> {item.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuView;
