import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Components/Button";
import Deals from "../Components/Deal";
import Navigation from "../Components/Navigation";
import RestaurantImage from "../Components/RestaurantImage";
import RestaurantInfo from "../Components/RestaurantInfo";
import RestaurantReview from "../Components/RestaurantReview.jsx";
import ReviewForm from "../Components/ReviewForm.jsx";
import { BACKEND_URL } from "../constants.js";
import { useParams } from 'react-router-dom';

function RestaurantView() {
    const { id } = useParams();
    const userid = localStorage.getItem('userid');
    const [error, setError] = useState('');
    const [restaurantData, setRestaurantData] = useState(null);
    const [hoursData, setHoursData] = useState(null);
    const [reviewsData, setReviewsData] = useState([]);
    const [review_id, setReview_id] = useState('');

  
    useEffect(() => {
        const fetchRestaurantData = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/restaurants/${id}`);
                setRestaurantData(response.data);
            } catch (error) {
                setError('Something went wrong');
            }
        };
        fetchRestaurantData();
    }, [id]);

    useEffect(() => {
        const fetchReviewsData = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/review/${id}`);
            setReviewsData(response.data.review); 
        } catch (error) {
            setError('Error fetching reviews data');
        }
        };
        fetchReviewsData();
    }, [id]);

    const handleDeleteReview = async () => {
    try {
        // need to implement a get method for review based on review_id to support user only delete
        // const response = await axios.get(`${BACKEND_URL}/review/${review_id}`);
        // const reviewUserId = response.data.user_id;
        // const currUserID = localStorage.getItem('userid');
        // if (reviewUserId !== currUserID) {
        //     console.error('Not this user review');
        //     return;
        // }
        await axios.delete(`${BACKEND_URL}/review/${review_id}`);
        const response = await axios.get(`${BACKEND_URL}/review/${id}`);
        setReviewsData(response.data.review); 
        setReview_id('');
    } catch (error) {
        setError('Could not delete the review');
    }
}


    const calculateAverageRating = () => {
        if (reviewsData && reviewsData.length > 0) {
            const totalStars = reviewsData.reduce((acc, review) => acc + review.star, 0);
            return totalStars / reviewsData.length;
        }
        return null;
    };    

    const dealsData = [
      {
          imageUrl: restaurantData ? restaurantData.image : '',
          altText: 'Deal 1',
          title: 'Special Offer 1',
          description: 'Take 30% off your first order',
      },
      {
          imageUrl: restaurantData ? restaurantData.image : '',
          altText: 'Deal 2',
          title: 'Discounted Menu',
          description: 'Buy one taco get one free',
      },
  ];

  return (
        <div className="app">
            <div className="header">
                <Navigation />
            </div>
            <div className="restaurant-content">
                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}
                {restaurantData && (
                    <>
                        <RestaurantInfo
                            name={restaurantData.name}
                            rating={calculateAverageRating()}
                            address={restaurantData.address}
                            phone={restaurantData.phone}
                            hours={restaurantData.hours.open + ' : ' + restaurantData.hours.close}
                        />
                        <RestaurantImage imageUrl={restaurantData.image} altText="Restaurant Image" />
                    </>
                )}
            </div>
            <div className="button-container">
                <Button to={`/menu/${id}`} text="View Menu" />
            </div>
            
            <div className="container-wrapper">
            <ReviewForm restaurantId={id} />
                <div>
                {error && <div>{error}</div>}
                <RestaurantReview reviews={reviewsData} />
                </div>
                <div className="deals-container">
                    {dealsData.map((deal, index) => (
                        <Deals
                            key={index}
                            imageUrl={deal.imageUrl}
                            altText={deal.altText}
                            title={deal.title}
                            description={deal.description}
                        />
                    ))}
                    <div className="delete-review-container">
                    <input 
                        type="text"
                        placeholder="Enter review ID to delete"
                        value={review_id}
                        onChange={e => setReview_id(e.target.value)}
                    />
                    <button onClick={handleDeleteReview}>Delete Review</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantView;
