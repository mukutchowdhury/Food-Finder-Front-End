import { useState } from 'react'
import axios from 'axios';

import CategoryCard from './Components/CategoryCard'
import Navigation from './Components/Navigation';
//import DiscountCard from './Components/DiscountCard.jsx';
import FilterCard from './Components/FilterCard.jsx';
import IconFilterCard from './Components/IconFilterCard.jsx';

import bf_icon from './assets/bf-icon.png'
import ff_icon from './assets/ff-icon.png'
import cof_icon from './assets/cof-icon.png'
import ital_icon from './assets/ital-icon.png'

import { faTag } from '@fortawesome/free-solid-svg-icons';
import { BACKEND_URL } from './constants.js';

function App() { //FFA500

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
      console.error(error)
    }
  }

  return (
    <>
      <Navigation callback={fetchRestaurantData} />
      <div className='flex'>
        <div className='flex flex-col min-h-[33vh] relative w-full'>
          <div className='max-w-full'>
            <div className='max-w-full'>
              <div className='relative max-w-full'>
                <div className='max-w-[1280px] mx-auto mt-2'>
                  <div>
                    <div className='relative'>
                      <div className='py-[2px] snap-x mx-16 overflow-auto scroll-smooth max-w-full flex items-stretch justify-start gap-5' style={{scrollbarWidth: "none"}}>
                        <IconFilterCard filterName='Breakfast' filterImage={bf_icon} />
                        <IconFilterCard filterName='Fast Food' filterImage={ff_icon} />
                        <IconFilterCard filterName='Coffee' filterImage={cof_icon} />
                        <IconFilterCard filterName='Italian' filterImage={ital_icon} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='max-w-full mt-4'>
                <div className='bg-white mb-0 sticky top-[63px] z-[1] mt-2 border-b border-solid border-[#E7E7E7]'>
                  <div className='max-w-[1280px] mx-auto'>
                    <div className='mt-[-12px] py-4 max-w-full'>
                      <div className='overflow-visible mx-16 scroll-smooth max-w-full flex items-stretch justify-start' style={{scrollbarWidth: "none"}}>
                        <div>
                          <div className='max-w-full flex items-stretch justify-start flex-row gap-2'>
                            <FilterCard filterName='Offers' filterStyle='button' filterIcon={faTag}/>
                            <FilterCard filterName='No Reservation' filterStyle='button' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='relative w-full h-full mt-2'>
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
                        <>
                          <CategoryCard categoryName={`${Object.keys(restaurantData).length} results`} restaurantList={restaurantData}/>
                          {/* <CategoryCard categoryName='Most popular local restaurant' restaurantList={restaurantData}/>
                          <CategoryCard categoryName='All Stores' restaurantList={restaurantData}/> */}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
