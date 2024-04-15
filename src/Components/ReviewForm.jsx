import React, { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../constants.js';

const ReviewForm = ({ restaurantId }) => {
  const [user_id, setUser_id] = useState('');
  const [text, setText] = useState('');
  const [star, setStar] = useState(0);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user_id || !text || !star) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URL}/review/${restaurantId}`, {
        user_id,
        text,
        star
      });
      console.log('Review submitted successfully:', response.data);
      setSuccessMessage('Review submitted successfully.');
      setUser_id('');
      setText('');
      setStar(0);
      setError('');
    } catch (error) {
      setError('Error submitting review');
      console.error('Error submitting review:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="form-label">
        User ID:
        <input
          type="number"
          value={user_id}
          onChange={(e) => setUser_id(e.target.value)}
          required
          className="form-input"
        />
      </label>
      <label className="form-label">
        Review Text:
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="form-input"
        />
      </label>
      <label className="form-label">
        Star Rating:
        <input
          type="number"
          min="0"
          max="5"
          value={star}
          onChange={(e) => setStar(parseInt(e.target.value))}
          required
          className="form-input"
        />
      </label>
      <button type="submit" className="form-submit">Submit Review</button>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
  );
};

export default ReviewForm;
