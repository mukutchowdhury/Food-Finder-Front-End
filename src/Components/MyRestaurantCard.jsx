import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import axios from 'axios';

import { BACKEND_URL } from '../constants';

function RestaurantCard(props) {
    const { restaurant_id, name, address, zipcode, image } = props.restaurantInfo;

    const navigate = useNavigate();

    const handleRoute = () => {
        navigate(`/restaurant/${restaurant_id}`);
    }

    const handleDeleteRestaurant = async () => {
        try {
            await axios.delete(`${BACKEND_URL}/restaurants/${restaurant_id}`);
            navigate(0);
        } catch (error) {
            console.error('Could not delete the restaurant:', error);
        }
    }

    const handleNavigateToVendorMenu = () => {
        navigate(`/vendor/${restaurant_id}`);
    }

    return (
        <div className='mb-4'>
        <div className='overflow-hidden relative max-w-full box-border' style={{ scrollSnapAlign: 'start', flex: "0 0 346px" }} onClick={handleRoute}>
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
                                        <span className='text-sm font-medium block text-gray-500 text-left overflow-hidden overflow-ellipsis whitespace-nowrap box-border'>{address} {zipcode}</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-start items-center mt-2'>
            <button onClick={handleDeleteRestaurant} className='w-full bg-white py-2 px-8'>
                <span className='text-xl font-bold tracking-normal text-red-500 whitespace-nowrap overflow-hidden overflow-ellipsis box-border'>
                    Delete
                </span>
            </button>
            <button onClick={handleNavigateToVendorMenu} className='bg-white py-2 px-8'>
                <span className='text-xl font-bold tracking-normal text-blue-500 whitespace-nowrap overflow-hidden overflow-ellipsis box-border'>
                    Restaurant Menu
                </span>
            </button>
        </div>
        </div>
    );
}

RestaurantCard.propTypes = {
    restaurantInfo: PropTypes.object.isRequired,
};

export default RestaurantCard;