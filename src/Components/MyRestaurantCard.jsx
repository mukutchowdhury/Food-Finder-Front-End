import axios from 'axios';
import { BACKEND_URL } from '../constants';
import { useNavigate } from 'react-router-dom';

const MyRestaurantCard = (props) => {

    const { restaurant_id, name, address, zipcode, phone } = props.restaurant;
    const navigate = useNavigate();

    const handleDeleteRestaurant = async () => {
        try {
            await axios.delete(`${BACKEND_URL}/restaurants/${restaurant_id}`);
            navigate(0);
        } catch (error) {
            console.error('Could not delete the restaurant:', error);
        }
    }

    return (
        <>
            <div className="shadow-black shadow-sm flex w-64 h-48 flex-col justify-center px-12 py-4 rounded-md">
                <div>
                    <p>{name}</p>
                    <p>{address}, {zipcode}</p>
                    <p>{phone}</p>
                </div>
                <button onClick={handleDeleteRestaurant} className='bg-gray-200 rounded-md px-4 py-2 mt-2 max-w-full'>
                    Delete
                </button>
            </div>
        </>
    );
};


export default MyRestaurantCard;
