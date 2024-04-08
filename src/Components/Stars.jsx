import React from 'react';

function Stars({ rating }) {
    const filledStars = Math.round(rating); 
    const starsArray = [];

    for (let i = 0; i < filledStars; i++) {
        starsArray.push(<span key={i} className="star filled">&#9733;</span>);
    }

    for (let i = filledStars; i < 5; i++) {
        starsArray.push(<span key={i} className="star empty">&#9734;</span>);
    }

    return <div className="stars">{starsArray}</div>;
}

export default Stars;
