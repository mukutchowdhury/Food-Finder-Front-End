import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Components/Button";
import Deals from "../Components/Deal";
import HeaderLogo from "../Components/HeaderLogo/HeaderLogo";
import Navigation from "../Components/Navigation";
import ProfileIcon from "../Components/ProfileIcon";
import RestaurantImage from "../Components/RestaurantImage";
import RestaurantInfo from "../Components/RestaurantInfo";
import RestaurantReview from "../Components/RestaurantReview.jsx";
import SearchBar from "../Components/SearchBar";
import Testimonial from "../Components/Testimonial";
import { BACKEND_URL } from "../constants.js";
import { useParams } from 'react-router-dom';

function RestaurantView() {
    const { id } = useParams();
    const [error, setError] = useState('');
    const [restaurantData, setRestaurantData] = useState(null);
    const [hoursData, setHoursData] = useState(null);
    const [reviewsData, setReviewsData] = useState([]);


    useEffect(() => {
        const fetchRestaurantData = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/restaurant/${id}`);
                setRestaurantData(response.data);
            } catch (error) {
                setError('Something went wrong');
            }
        };
        fetchRestaurantData();
    }, [id]);

    useEffect(() => {
      const fetchHoursData = async () => {
          try {
              const response = await axios.get(`${BACKEND_URL}/hour/${id}`);
              setHoursData(response.data);
          } catch (error) {
              setError('Error fetching hours data');
          }
      };
      fetchHoursData();
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
                <HeaderLogo />
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
                            hours={hoursData ? `${hoursData.open_time} - ${hoursData.close_time}` : ''}
                        />
                        <RestaurantImage imageUrl={restaurantData.image} altText="Restaurant Image" />
                    </>
                )}
            </div>
            <div className="button-container">
                <Button to="/menuView" restaurantId={id} text="View Menu" />
                <Button to="/reservation" text="Reserve a Table" />
            </div>
            <div className="container-wrapper">
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
                </div>
            </div>
        </div>
    );
}

export default RestaurantView;
