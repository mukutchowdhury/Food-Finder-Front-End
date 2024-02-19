
import { faArrowAltCircleRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styling/homeStyle.css';

import mainimage from '../assets/bg-motor.png';
import restaurant_image from '../assets/restaurant_pic.jpg';

function HomeView() {
    return (
        <>
            <div className='h-[80vh] w-full relative'>
                <div className='h-[10vh] w-full bg-green-600'>
                    <div className='h-full w-full flex justify-between items-center'>
                        <div className='h-full w-[17rem] flex justify-start items-center'>
                            <div className='w-[6rem] h-full mx-8'>
                                {/* <img className='h-full w-full object-center object-cover' src={logoimage} alt='logo'/> */}
                            </div>
                        </div>
                        <div className='w-2/6'>
                            <form className="relative">
                                <input
                                    type='text'
                                    className='mt-1 p-2 pl-8 w-full h-10 rounded-3xl border border-gray-300 focus:outline-none'
                                    placeholder='Enter nearby address'
                                />
                                <FontAwesomeIcon icon={faLocationDot} className="absolute left-3 top-4 text-gray-400" />
                                <button type="submit" className="absolute right-2 top-2 bg-green-600 rounded-full h-8 w-8 flex justify-center items-center">
                                    <FontAwesomeIcon icon={faArrowAltCircleRight} className="text-white" />
                                </button>
                            </form>
                        </div>
                        <div className='h-full flex justify-between items-center mx-8 gap-5'>
                            <button className="bg-green-700 hover:bg-green-800 text-white text-lg font-semibold py-2 px-4 rounded flex justify-center cursor-pointer">
                                Login
                            </button>
                            <button className="bg-green-700 hover:bg-green-800 text-white text-lg font-semibold py-2 px-4 rounded flex justify-center cursor-pointer">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
                <div className='h-1/3 w-full bg-green-600 flex justify-center items-center shadow shadow-black'>
                    <span className='text-9xl font-bold text-white'>Food Finder</span>
                </div>
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-[40%] -translate-y-[40%]'>
                <img className='w-5/6 h-5/6' src={mainimage} alt="food png image" />
            </div>
            <div className='h-[20vh] w-full bg-green-600'></div>

            <div className='h-[20vh] w-full bg-green-600 flex justify-center items-center'>
                <span className='text-3xl font-bold text-white'>Featured Restaurants & Deals</span>
            </div>

            <div className='grid grid-cols-3 gap-8 p-8'>
                {/* Featured Restaurant 1 */}
                <div className='bg-white p-4 rounded shadow'>
                    <img className='w-full h-32 object-cover mb-4 rounded' src={restaurant_image} alt='Featured Restaurant 1' />
                    <h3 className='text-lg font-semibold mb-2'>Terrific tacos</h3>
                    <p className='text-gray-600 mb-4'>Come for some spicy authentic Mexican tacos!</p>
                    <button className='bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700'>View Details</button>
                </div>
            </div>
        </>
    );
}


export default HomeView;