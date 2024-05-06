import React from 'react';
import Button from './Button';

const MenuItemCard = ({ menuItem, onDelete, onEdit }) => {
    return (
        <div className="menu-item-card">
            <h3>{menuItem.name}</h3>
            <p>Description: {menuItem.description}</p>
            <p>Price: ${menuItem.price.toFixed(2)}</p>
            <p>Category: {menuItem.category}</p>
            <div className="menu-item-actions">
                <Button onClick={() => onEdit(menuItem.id)}>Edit</Button>
                <Button onClick={() => onDelete(menuItem.id)}>Delete</Button>
            </div>
        </div>
    );
};

export default MenuItemCard;
