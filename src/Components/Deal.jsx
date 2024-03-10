import React from 'react';
import PropTypes from 'prop-types';

const Deals = ({ imageUrl, altText, title, description }) => {
  return (
    <div className="deals-container">
      <img src={imageUrl} alt={altText} className="deals-image" />
      <div className="deals-overlay">
        <h3 className="deals-title">{title}</h3>
        <p className="deals-description">{description}</p>
      </div>
    </div>
  );
};

Deals.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Deals;
