import React, { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../constants.js';

const ReviewForm = ({ restaurantId }) => {
  const user_id = localStorage.getItem('userid');
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
      const response = await axios.post(`${BACKEND_URL}review/${restaurantId}`, {
        user_id,
        text,
        star
      });
      console.log('Review submitted successfully:', response.data);
      setSuccessMessage('Review submitted successfully.');
      setText('');
      setStar(0);
      setError('');
    } catch (error) {
      setError('Error submitting review');
      console.error('Error:', error);
    }
  };


  return (
    <div className="review-container">
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label className="form-label">Leave a Review!</label>
          <textarea className="form-input" value={text} onChange={e => setText(e.target.value)} />
          <label className="form-label">Rating</label>
          <input type="number" className="form-input" value={star} onChange={e => setStar(e.target.value)} min="1" max="5" />
          {error && <div className="error-message">{error}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
          <button type="submit" className="form-submit">Submit Review</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
