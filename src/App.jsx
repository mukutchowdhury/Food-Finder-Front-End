import { useState } from 'react'
import axios from 'axios';
import CategoryCard from './Components/CategoryCard'
import Navigation from './Components/Navigation';

import { BACKEND_URL } from './constants.js';

function App() {

  const [restaurantData, setRestaurantData] = useState(null);

  const fetchRestaurantData = async (zipcode) => {
    try {
      console.log(`${BACKEND_URL}restaurant/all`);
      if (zipcode.length === 0) {
        const response = await axios.get(`${BACKEND_URL}/restaurant/all`);
        setRestaurantData(response.data)
      } else {
        const response = await axios.get(`${BACKEND_URL}/restaurants/by-zipcode/${zipcode}`);
        setRestaurantData(response.data)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Navigation callback={fetchRestaurantData} />
      <div className='relative z-0 box-border'>
        <div className='max-w-[1280px] mx-auto box-border'>
          {restaurantData !== null && (
            <CategoryCard categoryName='Most popular local restaurants' restaurantList={restaurantData}/>
          )}
        </div>
      </div>
    </>
  )
}

export default App
