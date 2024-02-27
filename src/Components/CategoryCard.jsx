import RestaurantCard from './RestaurantCard'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

function CategoryCard(props) {
    const { categoryName, restaurantList } = props;
    const containerRef = useRef(null);

    const arrayifyRestaurantsObject = () => {
        return Object.keys(restaurantList);
    }

    const scrollRight = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 500;
      }
      console.log('active')
    };

    const scrollLeft = () => {
        if (containerRef.current) {
          containerRef.current.scrollLeft -= 500;
        }
    };
  

    return (
        <>
            <div className=' max-w-full mt-4 box-border'>
                <div className=' max-w-full flex items-center justify-between box-border overflow-auto mx-16'>
                    <div className='max-w-full flex-1 items-center justify-start flex-row overflow-hidden box-border'>
                    <div className='max-w-full flex items-center justify-start flex-row box-border'>
                        <span className='leading-8 text-3xl font-bold tracking-tighter text-black text-left overflow-hidden truncate whitespace-no-wrap box-border'>
                        {categoryName}
                        </span>
                    </div>
                    </div>
                    <div className='max-w-full flex items-center justify-center flex-row ml-6 box-border'>
                    <span className='block flex-grow max-w-full transition-opacity opacity-100 pr-3 box-border'>
                        <span className='w-full font-bold text-center leading-4 tracking-normal text-black truncate box-border'>
                        See All
                        </span>
                    </span>
                    <div className='max-w-full flex items-stretch justify-start ml-4 flex-row box-border'>
                        <button className='relative inline-flex items-center justify-center w-8 h-8 rounded-full border transition duration-150 ease-in-out cursor-pointer select-none text-center bg-gray-200 shadow-inner border-gray-200 text-gray-700 box-border'
                                onClick={scrollLeft}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button className='relative inline-flex items-center justify-center w-8 h-8 rounded-full border transition duration-150 ease-in-out cursor-pointer select-none text-center bg-gray-200 shadow-inner border-gray-200 text-gray-700 ml-2 box-border'
                                onClick={scrollRight}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                    </div>
                </div>
                <div ref={containerRef} className='overscroll-x-contain mx-16 overflow-auto scroll-smooth max-w-full flex items-stretch justify-start mt-4 gap-14 box-border' style={{scrollbarWidth: "none"}}>
                    {arrayifyRestaurantsObject().map((item, index) => (
                        <RestaurantCard restaurantInfo={restaurantList[item]} key={index}/>
                    ))}
                </div>
            </div>
        </>
    )
}

CategoryCard.propTypes = {
    categoryName: PropTypes.string.isRequired,
    restaurantList: PropTypes.object.isRequired,
};

export default CategoryCard;
