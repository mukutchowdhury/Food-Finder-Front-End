import { useState } from 'react'
import axios from 'axios';
import CategoryCard from './Components/CategoryCard'
import Navigation from './Components/Navigation';
//import DiscountCard from './Components/DiscountCard.jsx';

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
          <div>
              <div className='relative'>
                  <div className='mb-6 overscroll-x-contain snap-x mx-16 overflow-hidden scroll-smooth max-w-full flex items-stretch justify-start gap-3' style={{scrollbarWidth: "none"}}>
                    {/* {restaurantData !== null && (
                      <DiscountCard restaurantInfo={restaurantData[2]}/>
                    )} */}
                  </div>
              </div>
          </div>
          {restaurantData !== null && (
            <CategoryCard categoryName='Most popular fast food' restaurantList={restaurantData}/>
          )}
        </div>
      </div>
    </>
  )
}

export default App
