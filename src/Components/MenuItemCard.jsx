import React from 'react';
import Button from './Button'; 

const MenuItemCard = ({ menuItem, onDelete, onEdit }) => {
    return (
        <div className="menu-item-card mb-4 overflow-hidden relative max-w-full box-border">
            <div className="menu-item-content">
                <h3>{menuItem.name}</h3>
                <p>Description: {menuItem.description}</p>
                <p>Price: ${menuItem.price}</p>
                <p>Category: {menuItem.category}</p>
                {menuItem.image && <img className="h-44 w-full object-cover" src={menuItem.image} alt={menuItem.name} style={{ objectPosition: '50% 50%' }} />}
            </div>
            <div className="menu-item-actions flex justify-start items-center mt-2">
                <Button onClick={() => onDelete(menuItem.menuitem_id)} text="Delete" />
            </div>
        </div>
    );
};

export default MenuItemCard;
