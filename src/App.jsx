import { useState } from 'react'
import axios from 'axios';

import CategoryCard from './Components/RestaurantShower/CategoryCard.jsx'
import Navigation from './Components/Navigation';
//import DiscountCard from './Components/DiscountCard.jsx';
import FilterCard from './Components/RestaurantShower/FilterCard.jsx';
import IconFilterCard from './Components/RestaurantShower/IconFilterCard.jsx';

import bf_icon from './assets/bf-icon.png'
import ff_icon from './assets/ff-icon.png'
import cof_icon from './assets/cof-icon.png'
import ital_icon from './assets/ital-icon.png'

import { faTag } from '@fortawesome/free-solid-svg-icons';
import { BACKEND_URL } from './constants.js';

function App() { //FFA500

  const [restaurantData, setRestaurantData] = useState(null);
  const [activeFilter, setActiveFilter] = useState(false);

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
      setActiveFilter(false);
    } catch (error) {
      console.error(error)
    }
  }

  const filterByCuisine = async (keyword) => {
    // ISSUE: If I click a filter then click another filter, the previous item is elimated and cannot satisfy the new filter
    const filteredData = Object.fromEntries(
        // eslint-disable-next-line no-unused-vars
        Object.entries(restaurantData).filter(([key, value]) =>
            value.cuisine.indexOf(keyword) !== -1
        )
    );
    setRestaurantData(filteredData);
    setActiveFilter(true);
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
                        <IconFilterCard filterName='Breakfast' filterImage={bf_icon} callback={filterByCuisine}/>
                        <IconFilterCard filterName='Fast Food' filterImage={ff_icon} callback={filterByCuisine}/>
                        <IconFilterCard filterName='Coffee' filterImage={cof_icon} callback={filterByCuisine}/>
                        <IconFilterCard filterName='Italian' filterImage={ital_icon} callback={filterByCuisine}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='max-w-full mt-4'>
                <div className='bg-white mb-0 sticky top-[63px] z-[1] mt-2'>
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
                      {activeFilter && (
                      <div className='mx-16 max-w-full flex items-center justify-between mt-4'>
                        <span className='leading-8 text-2xl font-bold tracking-tighter text-left m-0 p-0 block text-[#191919]'>{Object.keys(restaurantData || []).length} results</span>
                        <button className='ml-6 relative max-w-full m-0 p-0 inline-flex min-h-8 w-auto bg-gray-200 items-center justify-start rounded-3xl cursor-pointer select-none text-center text-[#191919]' 
                        style={{boxShadow:"rgb(231, 231, 231) 0px 0px 0px 1px inset",textDecoration: "none", border:"medium" }}
                        onClick={() => fetchRestaurantData('')}>
                          <span className='block flex-grow max-w-full opacity-100 px-3 py-0'>
                            <span className='max-w-full flex items-center justify-center flex-row'>
                              <span className='flex-grow-[2] min-w-0 flex justify-center'>
                                <span className='w-full text-sm font-bold text-center m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap'>
                                  Reset
                                </span>
                              </span>
                            </span>
                          </span>
                        </button>
                      </div>
                      )}
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
                          {activeFilter ? (
                              <CategoryCard restaurantList={restaurantData} />
                          ) : (
                              <CategoryCard categoryName='Top Picks' restaurantList={restaurantData} />
                          )}
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
