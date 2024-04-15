// RestaurantReview.jsx
import React from 'react';
import Stars from './Stars'; 

const RestaurantReview = ({ reviews }) => {
  if (!Array.isArray(reviews) || reviews.length === 0) {
    return <div>No reviews available</div>;
  }

  return (
    <div className="review-container">
      {reviews.map((review) => (
        <div key={review._id} className="review-box">
          <div className="user-id">User ID: {review.user_id}</div>
          <div className="text">Review: {review.text}</div>
          <div className="star-rating">
            Rating: <Stars rating={review.star} /> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantReview;
