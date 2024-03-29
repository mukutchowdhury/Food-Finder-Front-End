import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import axios from 'axios';

import { BACKEND_URL } from '../../constants';

function RestaurantCard(props) {
    const { restaurant_id, name, address, zipcode, image } = props.restaurantInfo;
    const [totalStar, setTotalStar] = useState(4.5);
    const [totalReviews, setTotalReviews] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchReviewData = async () => {
            const response = await axios.get(`${BACKEND_URL}/review/${restaurant_id}`);
            setTotalStar(response.data.total);
            setTotalReviews(response.data.review.length);
        }
        fetchReviewData();
    }, [restaurant_id])

    const handleRoute = () => {
        navigate(`/restaurant/${restaurant_id}`);
    }

    return (
        <div className='mb-4 overflow-hidden relative max-w-full box-border' style={{ scrollSnapAlign: 'start', flex: "0 0 346px" }} onClick={handleRoute}>
            <a className='absolute inset-0 decoration-inherit cursor-pointer box-border'></a>
            <div className='max-w-full box-border'>
                <a className='absolute inset-0 decoration-inherit cursor-pointer box-border'></a>
                <div className='max-w-full box-border'>
                    <div className='relative box-border'>
                        <a className='absolute inset-0 decoration-inherit cursor-pointer box-border'></a>
                        <div className='h-44 w-full overflow-hidden bg-white opacity-100 rounded-md box-border'> 
                            <img className='block w-full h-full object-cover box-border' src={image} style={{ objectPosition: '50% 50%' }}></img>
                        </div>
                    </div>
                    <div className='relative mt-3 box-border'>
                        <a className='decoration-inherit cursor-pointer box-border'>
                            <div className='max-w-full box-border'>
                                <div className='max-w-full flex items-center justify-start flex-row mt-[2px] box-border'>
                                    <span className='text-xl font-bold tracking-normal text-black whitespace-nowrap overflow-hidden overflow-ellipsis box-border'>{name}</span>
                                </div>
                                <div className='overflow-hidden mt-[2px] box-border'>
                                    <div className='max-w-full flex items-center justify-start flex-row box-border'>
                                        <div className='box-border'>
                                            <div className='max-w-full flex items-stretch justify-start flex-row box-border gap-1'>
                                                <div className='max-w-full flex items-center justify-start flex-row box-border gap-1'>
                                                    <span className='text-sm font-medium block tracking-normal text-gray-500 text-left overflow-hidden overflow-ellipsis whitespace-nowrap box-border'>{totalStar.toFixed(1)}</span>
                                                    <FontAwesomeIcon icon={faStar} size="xs" className='text-gray-500'/>
                                                </div>
                                                <span className='text-sm font-medium block text-gray-500 text-left overflow-hidden overflow-ellipsis whitespace-nowrap box-border'>({totalReviews})</span>
                                            </div>
                                        </div>
                                        <span className='pr-1 ml-[2px] text-sm font-medium tracking-normal text-gray-500 box-border'>•</span>
                                        <span className='text-sm font-medium block text-gray-500 text-left overflow-hidden overflow-ellipsis whitespace-nowrap box-border'>{address} {zipcode}</span>
                                    </div>
                                </div>
                                <div className='overflow-hidden mt-[2px] box-border'>
                                    <span className='text-sm font-medium block text-gray-500 text-left overflow-hidden overflow-ellipsis whitespace-nowrap box-border'>$0 delivery fee, first order</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}

RestaurantCard.propTypes = {
    restaurantInfo: PropTypes.object.isRequired,
};

export default RestaurantCard;