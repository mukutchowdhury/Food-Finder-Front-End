import React from 'react';
import HeaderLogo from '../Components/HeaderLogo/HeaderLogo';
import Navigation from '../Components/Navigation';
import Taco from "../assets/Terrific-tacos.jpeg"
import Burger from "../assets/burger.jpeg"


const MenuView = () => {
  const menuItems = [
    { id: 1, name: 'Tacos', price: 10, image: Taco },
    { id: 2, name: 'Burger', price: 15, image: Burger },
  ];

  return (
    <div className="menu-container">
        <div className="header">
            <HeaderLogo />
            <Navigation />
        </div>
      <h1 className="menu-title">Terric Taco Menu</h1>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuView;
