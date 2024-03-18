import axios from "axios";
import Button from "../Components/Button";
import Deals from "../Components/Deal";
import HeaderLogo from "../Components/HeaderLogo/HeaderLogo";
import Navigation from "../Components/Navigation";
import ProfileIcon from "../Components/ProfileIcon";
import React, { useState, useEffect } from "react";
import RestaurantImage from "../Components/RestaurantImage";
import RestaurantInfo from "../Components/RestaurantInfo";
import SearchBar from "../Components/SearchBar";
import Testimonial from "../Components/Testimonial";
import Taco from "../assets/Terrific-tacos.jpeg"
import '../styling/restStyle.css';
import { BACKEND_URL } from "../constants.js";
import { useParams } from 'react-router-dom';

function RestaurantView() {
  // let {id} = useParams();
  // const [error, setError] = useState('');
  // const [restaurantData, setRestaurantData] = useState(null);

  // useEffect(() => {
    
  //   axios.get(`${BACKEND_URL}restaurant/${id}`)
  //     .then(response => {
  //       setRestaurantData(response.data);
  //     })
  //     .catch(() => {
  //       setError('Something went wrong');
  //     });
  // }, []);
  // console.log(`${BACKEND_URL}restaurant/${id}`)

  // useEffect(() => {
  //   const fetchRestaurantData = async () => {
  //     try {
  //       const response = await axios.get(`${BACKEND_URL}restaurant/${id}`)
  //       setRestaurantData(response.data.Data)
  //       console.log(response.data.Data)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   fetchRestaurantData()
  // })
  
  const restaurantData = {
    name: 'Terrific Tacos',
    rating: 4.5,
    address: '123 Main Street, 10002',
    hours: 'Mon - Fri: 9 AM - 8 PM',
  };    

  const imageData = {
    imageUrl: Taco,
    altText: 'Restaurant Image',
  };    

  const dealsData = [
    {
      imageUrl: Taco,
      altText: 'Deal 1',
      title: 'Special Offer 1',
      description: 'Take 30% off your first order',
    },
    {
      imageUrl: Taco,
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
      {/* {error && (
        <div className="error-message">
          {error}
        </div>
      )} */}
      {/* <div className="header-container">
          <HeaderLogo />
          <SearchBar />
      </div>

      <div className="Profile-container">
        <ProfileIcon />
      </div> */}
      <div className="restaurant-content">
        <RestaurantInfo
          name={restaurantData.name}
          rating={restaurantData.rating}
          address={restaurantData.address}
          hours={restaurantData.hours}
        />
        <RestaurantImage imageUrl={imageData.imageUrl} altText={imageData.altText} />
      </div>
      <div className="button-container">
        {/* Use the Button component for menus and reservation placeholder*/}
        <Button to="/menuView" text="Menus" />
        <Button to="/reservation" text="Reserve a Table" />
      </div>
      <div className="container-wrapper">
        <div className="testimonial-container">
          <h2>Testimonials</h2>
            <Testimonial
                text="Great food options on a low budget!"
                rating="5 Stars"
                author="Jose Caledron"
            />
            <Testimonial
                text="An upgrade over UberEats fosho!!!"
                rating="4 Stars"
                author="Mike Mcquire"
            />
            <Testimonial
                text="I'm impressed by the speed and reliability of this platform. It's been a game-changer for me."
                rating="4 Stars"
                author="Steve Parson"
            />
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
