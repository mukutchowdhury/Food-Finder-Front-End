// import React from 'react';
// import HeaderLogo from '../Components/HeaderLogo/HeaderLogo';
// import Navigation from '../Components/Navigation';
// import Taco from "../assets/Terrific-tacos.jpeg"
// import Burger from "../assets/burger.jpeg"


// const MenuView = () => {
//   const menuItems = [
//     { id: 1, name: 'Tacos', price: 10, image: Taco },
//     { id: 2, name: 'Burger', price: 15, image: Burger },
//   ];

//   return (
//     <div className="menu-container">
//         <div className="header">
//             <HeaderLogo />
//             <Navigation />
//         </div>
//       <h1 className="menu-title">Terric Taco Menu</h1>
//       <div className="menu-items">
//         {menuItems.map((item) => (
//           <div key={item.id} className="menu-item">
//             <img src={item.image} alt={item.name} className="item-image" />
//             <h3>{item.name}</h3>
//             <p>${item.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MenuView;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MenuView = ({ restaurantId }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/menu/${restaurantId}`);
        setMenuItems(response.data);
      } catch (error) {
        setError('Error fetching menu items');
      }
    };

    fetchMenuItems();
  }, [restaurantId]);

return (
    <div>
      <h1>Menu</h1>
      {error && <p>{error}</p>}
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
};

export default MenuView;
