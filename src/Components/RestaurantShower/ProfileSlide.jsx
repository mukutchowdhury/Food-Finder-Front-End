import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCog, faToggleOn, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { BACKEND_URL } from '../../constants';

function ProfileSlide() {

    const navigate = useNavigate();
    const userid = localStorage.getItem('userid');

    const [name, setName] = useState('');

    const handleLogout = () => {
        localStorage.removeItem('userid');
        navigate(0);
    }

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await axios.get(`${BACKEND_URL}/user/${userid}`);
            setName(`${response.data.fname} ${response.data.lname}`);
            
        }
        fetchUserData();
    }, [userid]);

    return (
        <div className='w-[360px] shadow-md shadow-slate-300 rounded-md absolute right-0 z-[400]'>
            <div className='max-w-full'>
                <div className='max-w-full px-4 py-2 flex flex-col gap-3'>
                    <div className='max-w-full flex items-center gap-4 py-4 px-3 rounded-md shadow-lg shadow-slate-300'>
                        <div className='max-w-full flex items-center justify-center flex-row'>
                            <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray-300">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                        </div>
                        <div className='max-w-full'>
                            <span className='text-[1.0625rem] leading-[1.1765] font-semibold tracking-normal text-black whitespace-nowrap overflow-hidden overflow-ellipsis box-border'>
                                {name}
                            </span>
                        </div>
                    </div>
                    <div className='max-w-full mt-2'>
                        <div className='max-w-full rounded-md hover:bg-zinc-100 cursor-pointer'>
                            <div className='max-w-full flex items-center gap-4 p-2'>
                                <div className='max-w-full flex items-center justify-center flex-row'>
                                    <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray-300">
                                        <FontAwesomeIcon icon={faCog} />
                                    </div>
                                </div>
                                <div className='max-w-full'>
                                    <span className='text-[.9375rem] leading-[1.3333] font-medium block text-black text-left overflow-hidden overflow-ellipsis whitespace-nowrap box-border'>
                                        Settings
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-full rounded-md hover:bg-zinc-100 cursor-pointer'>
                            <div className='max-w-full flex items-center gap-4 p-2'>
                                <div className='max-w-full flex items-center justify-center flex-row'>
                                    <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray-300">
                                        <FontAwesomeIcon icon={faToggleOn} />
                                    </div>
                                </div>
                                <div className='max-w-full'>
                                    <span className='text-[.9375rem] leading-[1.3333] font-medium block text-black text-left overflow-hidden overflow-ellipsis whitespace-nowrap box-border'>
                                        Switch to vendor
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-full rounded-md hover:bg-zinc-100 cursor-pointer' onClick={handleLogout}>
                            <div className='max-w-full flex items-center gap-4 p-2'>
                                <div className='max-w-full flex items-center justify-center flex-row'>
                                    <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray-300">
                                        <FontAwesomeIcon icon={faSignOutAlt} />
                                    </div>
                                </div>
                                <div className='max-w-full'>
                                    <span className='text-[.9375rem] leading-[1.3333] font-medium  block text-black text-left overflow-hidden overflow-ellipsis whitespace-nowrap box-border'>
                                        Log Out
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default ProfileSlide;