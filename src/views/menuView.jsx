import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BACKEND_URL } from "../constants.js";

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
            <h2>{category}</h2>
            {filteredMenuItems[category].map(item => (
              <div key={item._id} className="menu-item">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuView;
