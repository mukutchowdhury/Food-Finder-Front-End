import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCog, faToggleOn, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'

import { BACKEND_URL } from '../../constants';

function ProfileSlide(props) {

    const navigate = useNavigate();
    const location = useLocation();

    const userid = localStorage.getItem('userid');

    const [name, setName] = useState('');
    const [pimage, setPimage] = useState('');
    const [privilege, setPrivilege] = useState(0);

    const { imageCallback } = props;

    const handleLogout = () => {
        localStorage.removeItem('userid');
        if (location.pathname === '/') {
            navigate(0);
        } else {
            navigate('/');
        }
    }

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await axios.get(`${BACKEND_URL}/user/${userid}`);
            setPrivilege(response.data.privilege);
        }
        fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userid]);

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await axios.get(`${BACKEND_URL}/user/${userid}`);
            setName(`${response.data.fname} ${response.data.lname}`);
            setPimage(`${response.data.pimage}`);
            imageCallback(response.data.pimage);
        }
        fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userid]);

    return (
        <div className='w-[360px] shadow-md bg-white shadow-slate-300 rounded-md fixed right-0 z-[400]'>
            <div className='max-w-full'>
                <div className='max-w-full px-4 py-2 flex flex-col gap-3'>
                    <div className='max-w-full bg-white flex items-center gap-4 py-4 px-3 rounded-md shadow-lg shadow-slate-300'>
                        <div className='max-w-full flex items-center justify-center flex-row'>
                            {pimage === '' ? (
                                <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray-300">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                            ) : (
                                <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray-300 bg-transparent bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${pimage})`}}>
                                </div>
                            )}
                        </div>
                        <div className='max-w-full'>
                            <span className='text-[1.0625rem] leading-[1.1765] font-semibold tracking-normal text-black whitespace-nowrap overflow-hidden overflow-ellipsis box-border select-none'>
                                {name}
                            </span>
                        </div>
                    </div>
                    <div className='max-w-full mt-2'>
                        {privilege !== 0 && (
                        <a href='/dev-settings'>
                        <div className='max-w-full rounded-md bg-white hover:bg-zinc-100 cursor-pointer'>
                            <div className='max-w-full flex items-center gap-4 p-2'>
                                <div className='max-w-full flex items-center justify-center flex-row'>
                                    <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray-300">
                                        <FontAwesomeIcon icon={faCog} />
                                    </div>
                                </div>
                                <div className='max-w-full'>
                                    <span className='text-[.9375rem] leading-[1.3333] font-medium block text-black text-left overflow-hidden overflow-ellipsis whitespace-nowrap box-border select-none'>
                                        Settings
                                    </span>
                                </div>
                            </div>
                        </div>
                        </a>
                        )}
                        <div className='max-w-full rounded-md bg-white hover:bg-zinc-100 cursor-pointer'>
                            <div className='max-w-full flex items-center gap-4 p-2'>
                                <div className='max-w-full flex items-center justify-center flex-row'>
                                    <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray-300">
                                        <FontAwesomeIcon icon={faToggleOn} />
                                    </div>
                                </div>
                                <div className='max-w-full'>
                                    <span className='text-[.9375rem] leading-[1.3333] font-medium block text-black text-left overflow-hidden overflow-ellipsis whitespace-nowrap box-border select-none'>
                                        Switch to vendor
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-full rounded-md bg-white hover:bg-zinc-100 cursor-pointer' onClick={handleLogout}>
                            <div className='max-w-full flex items-center gap-4 p-2'>
                                <div className='max-w-full flex items-center justify-center flex-row'>
                                    <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray-300">
                                        <FontAwesomeIcon icon={faSignOutAlt} />
                                    </div>
                                </div>
                                <div className='max-w-full'>
                                    <span className='text-[.9375rem] leading-[1.3333] font-medium  block text-black text-left overflow-hidden overflow-ellipsis whitespace-nowrap box-border select-none'>
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

ProfileSlide.propTypes = {
    imageCallback: PropTypes.func,
};

export default ProfileSlide;