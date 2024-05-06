import React from 'react';
import Button from './Button';

const MenuItemCard = ({ menuItem, onDelete, onEdit }) => {
    return (
        <div className="menu-item-card">
            <h3>{menuItem.name}</h3>
            <p>Description: {menuItem.description}</p>
            <p>Price: ${menuItem.price}</p>
            <p>Category: {menuItem.category}</p>
            {menuItem.image && <img src={menuItem.image} alt={menuItem.name} />}
            <div className="menu-item-actions">
                <Button onClick={() => onEdit(menuItem.menuitem_id)}>Edit</Button>
                <Button onClick={() => onDelete(menuItem.menuitem_id)}>Delete</Button>
            </div>
        </div>
    );
};

export default MenuItemCard;
