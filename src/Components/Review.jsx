import axios from 'axios';
import { useState } from 'react';

import { BACKEND_URL } from '../constants';

import { useParams } from 'react-router-dom';

const Review = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [userId, setUserId] = useState('');
  const [reviewId, setReviewId] = useState('');

  let { id } = useParams();

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleReviewIdChange = (event) => {
    setReviewId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.post(`${BACKEND_URL}/review/${id}`, {
            "review_id": reviewId,
            "user_id": userId,
            "text": comment,
            "star": rating
        });
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }

    setUserId('');
    setReviewId('');
    setRating(0);
    setComment('');
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userId">
            User ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="userId"
            type="text"
            placeholder="Enter user ID"
            value={userId}
            onChange={handleUserIdChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reviewId">
            Review ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="reviewId"
            type="text"
            placeholder="Enter review ID"
            value={reviewId}
            onChange={handleReviewIdChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
            Rating
          </label>
          <div>
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                type="button"
                className={`text-2xl focus:outline-none ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                onClick={() => handleRatingChange(index + 1)}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
            Comment
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comment"
            rows="4"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Enter your comment here..."
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Review;
