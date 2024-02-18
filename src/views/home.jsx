
import '../styling/homeStyle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

import mainimage from '../assets/bg-motor.png';

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
        </>
    );
}


export default HomeView;