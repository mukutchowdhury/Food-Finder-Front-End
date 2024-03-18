
import Navigation  from '../Components/Navigation';
import '../styling/homeStyle.css';

import couponImage from '../assets/coupon.jpg';
import restaurant_image from '../assets/restaurant_pic.jpg';

function HomeView() {
    return (
        <>
            <Navigation />
            <div className='h-[20vh] w-full bg-green-600 flex justify-center items-center'>
                <span className='text-3xl font-bold text-white'>Featured Restaurants & Deals</span>
            </div>

            <div className='grid grid-cols-3 gap-8 p-8'>
                {/* Featured Restaurant 1 */}
                <div className='bg-white p-4 rounded shadow'>
                    <img className='w-full h-32 object-cover mb-4 rounded' src={restaurant_image} alt='Featured Restaurant 1' />
                    <h3 className='text-lg font-semibold mb-2'>Terrific Tacos</h3>
                    <p className='text-gray-600 mb-4'>Come for some spicy authentic Mexican tacos!</p>
                    <button className='bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700'>View Details</button>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-8 p-8'>
                {/* Featured Deal */}
                <div className='bg-white p-4 rounded shadow'>
                    <img className='w-full h-32 object-cover mb-4 rounded' src={couponImage} alt='Featured Restaurant 1' />
                    <h3 className='text-lg font-semibold mb-2'> 20% off at Terrific Tacos</h3>
                    <p className='text-gray-600 mb-4'>Enjoy some meals and deals!</p>
                    <button className='bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700'>Save Now</button>
                </div>
            </div>

            {/* Footer */}
            <div className='h-16 bg-green-700 flex items-center justify-center'>
                <div className='text-white flex gap-4'>
                    <a href='/about-us'>About Us</a>
                    <a href='/contact'>Contact</a>
                    <a href='/privacy-policy'>Privacy Policy</a>
                    <a href='/terms-of-service'>Terms of Service</a>
                </div>
            </div>
        </>
    );
}


export default HomeView;