import React from "react";
import SearchBar from "../Components/SearchBar";
import ProfileIcon from "../Components/ProfileIcon";
import RestaurantInfo from "../Components/RestaurantInfo";
import '../styling/restStyle.css';

function RestaurantView() {
  return (
    <div className="app">
        <div className="SearchBar-container">
            <SearchBar />
        </div>
      <ProfileIcon />
      <div className="restaurant-content">
        <RestaurantInfo />
      </div>
    </div>
  );
}

export default RestaurantView;
