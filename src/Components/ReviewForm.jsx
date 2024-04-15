import React, { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../constants.js';

const ReviewForm = ({ restaurantId }) => {
  const [user_id, setUser_id] = useState('');
  const [text, setText] = useState('');
  const [star, setStar] = useState(0);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/review/${restaurantId}`, {
        user_id,
        text,
        star
      });
      console.log('Review submitted successfully:', response.data);
    } catch (error) {
      setError('Error submitting review');
      console.error('Error submitting review:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User ID:
        <input
          type="number"
          value={user_id}
          onChange={(e) => setUser_id(e.target.value)}
        />
      </label>
      <br />
      <label>
        Review Text:
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <br />
      <label>
        Star Rating:
        <input
          type="number"
          min="0"
          max="5"
          value={star}
          onChange={(e) => setStar(parseInt(e.target.value))}
        />
      </label>
      <br />
      <button type="submit">Submit Review</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default ReviewForm;
