import RestaurantCard from './RestaurantCard'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CategoryCard(props) {
    const { categoryName, desc, restaurantList, structure } = props;
    const containerRef = useRef(null);

    const navigate = useNavigate();

    const [filterData, setFilterData] = useState(restaurantList);

    const PANEL_SHIFT = 1205;

    const arrayifyRestaurantsObject = () => {
        return Object.keys(restaurantList);
    }

    const arrayifyFilterRestaurant = () => {
        return Object.keys(filterData);
    }

    const scrollRight = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += PANEL_SHIFT;
      }
      console.log('active')
    };

    const scrollLeft = () => {
        if (containerRef.current) {
          containerRef.current.scrollLeft -= PANEL_SHIFT;
        }
    };

    useEffect(() => {
        const filterByCategory = () => {
            const result = Object.fromEntries(
                // eslint-disable-next-line no-unused-vars
                Object.entries(restaurantList).filter(([key, value]) =>
                    value.category.indexOf(categoryName) !== -1
                )
            );
            setFilterData(result);
        };
        if (categoryName !== undefined) {
            filterByCategory();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSeeAll = () => navigate(`/category/${ categoryName }`, { state: { categoryName, desc, filterData } });

    return (
        <>
            <div className=' max-w-full mt-4 box-border'>
                {categoryName !== undefined && !structure && (
                <div className=' max-w-full flex items-center justify-between box-border overflow-auto mx-16'>
                    <div className='max-w-full flex-1 items-center justify-start flex-row overflow-hidden box-border'>
                    <div className='max-w-full flex items-center justify-start flex-row box-border'>
                        <span className='leading-8 text-2xl font-bold tracking-tighter text-black text-left overflow-hidden truncate whitespace-no-wrap box-border'>
                        {categoryName}
                        </span>
                    </div>
                    </div>
                    <div className='max-w-full flex items-center justify-center flex-row ml-6 box-border'>
                    <span className='block flex-grow max-w-full transition-opacity opacity-100 pr-3 box-border'>
                        <span onClick={handleSeeAll} className='w-full font-bold text-center leading-4 tracking-normal text-black truncate box-border cursor-pointer select-none'>
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
                )}
                {structure !== undefined && structure === 'block' ? (
                    <div>
                        {categoryName !== undefined && (
                        <div className='py-3 mx-16 max-w-full flex items-center justify-between mt-4'>
                            <div className='max-w-full flex items-center justify-start flex-row'>
                                <div className='max-w-full'>
                                    <span className='text-3xl font-bold tracking-tighter transform-none text-left text-[#191919] m-0 p-0 block'>
                                    All Stores
                                    </span>
                                </div>
                            </div>  
                        </div>
                        )}
                        <div className='mx-16 flex flex-wrap mt-4 max-w-full justify-start gap-14'>
                            {arrayifyRestaurantsObject().map((item, index) => (
                                <RestaurantCard restaurantInfo={restaurantList[item]} key={index}/>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div ref={containerRef} className='overscroll-x-contain mx-16 overflow-auto scroll-smooth max-w-full flex items-stretch justify-start mt-4 gap-14 box-border' style={{scrollbarWidth: "none"}}>
                        {arrayifyFilterRestaurant().map((item, index) => (
                            <RestaurantCard restaurantInfo={filterData[item]} key={index}/>
                        ))}
                        {console.log(filterData)}
                    </div>
                )}
            </div>
        </>
    )
}

CategoryCard.propTypes = {
    categoryName: PropTypes.string,
    desc: PropTypes.string,
    restaurantList: PropTypes.object.isRequired,
    structure: PropTypes.string,
};

export default CategoryCard;
