import React from 'react';

function MenuView() {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Menu</h1>
      <div className="menu-items">
        {/* menu items goes here */}
        <div className="menu-item">
          <h3>Item 1</h3>
          <p>Description of item 1</p>
          <span>$10</span>
        </div>
        <div className="menu-item">
          <h3>Item 2</h3>
          <p>Description of item 2</p>
          <span>$15</span>
        </div>
      </div>
    </div>
  );
}

export default MenuView;
