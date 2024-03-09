import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, text }) => {
  if (to) {
    // connect to link
    return (
      <Link to={to}>
        <button className="rest-button">{text}</button>
      </Link>
    );
  } else {
    // placeholder
    return <button className="rest-button">{text}</button>;
  }
};

export default Button;
