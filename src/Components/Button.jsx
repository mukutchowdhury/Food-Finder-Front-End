import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, text }) => {
    return (
        <Link to={to} className="rest-button">
            {text}
        </Link>
    );
};

export default Button;
