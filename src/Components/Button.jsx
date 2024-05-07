import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, onClick, text }) => {
    if (to) {
        return <Link to={to} className="rest-button">{text}</Link>;
    } else {
        return <button onClick={onClick} className="rest-button">{text}</button>;
    }
};

export default Button;
