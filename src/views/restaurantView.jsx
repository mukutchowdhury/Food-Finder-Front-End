import React from "react";
import Button from "../Components/Button";
import SearchBar from "../Components/SearchBar";
import ProfileIcon from "../Components/ProfileIcon";
import RestaurantInfo from "../Components/RestaurantInfo";
import RestaurantImage from "../Components/RestaurantImage";
import '../styling/restStyle.css';

function RestaurantView() {
    const restaurantData = {
        name: 'Terrific Tacos',
        rating: 4.5,
        address: '123 Main Street, 10002',
        hours: 'Mon - Fri: 9 AM - 8 PM',
      };    

      const imageData = {
        imageUrl: 'src/assets/Terrific-tacos.jpeg',
        altText: 'Restaurant Image',
      };    

  return (
    <div className="app">
        <div className="SearchBar-container">
            <SearchBar />
        </div>
        <div className="Profile-container">
            <ProfileIcon />
        </div>
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
            <Button to="/menus" text="Menus" />
            <Button to="/reservation" text="Reserve a Table" />
          </div>
    </div>
  );
}

export default RestaurantView;
