import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SettingNav from "../Components/setting-nav";
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEdit, faUserEdit } from '@fortawesome/free-solid-svg-icons';

import SettingsOption from "../Components/SettingsOption";
import ManageCategory from "./ManageCategory";

import { BACKEND_URL } from "../constants";

function Settings() {
    const userid = localStorage.getItem('userid');
    const [pimage, setPimage] = useState('');
    const [email, setEmail] = useState('');
    const [privilege, setPrivilege] = useState(0);

    const location = useLocation();
    const navigate = useNavigate();

    const [showHash, setShowHash] = useState(location.hash);

    useEffect(() => {
        const handleFragmentChange = () => {
            setShowHash(location.hash);
        };
        handleFragmentChange();
    }, [location.hash])

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await axios.get(`${BACKEND_URL}/user/${userid}`);
            setPimage(response.data.pimage);
            setEmail(response.data.email);
            setPrivilege(response.data.privilege);
        }
        fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userid]);

    if (privilege === 0) {
        navigate('/access-denied')
    } else {
        return (
            <>
                <SettingNav />
                <div className='max-w-full'>
                    <div className='max-w-full flex justify-start'>
                        <div className='max-w-full px-4 py-4'>
                            <div className='w-56 h-56 border-[2px] rounded-2xl border-black'>
                                {pimage === '' ? (
                                    <div className="w-full h-full flex rounded-2xl items-center justify-center bg-gray-300">
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                ) : (
                                    <div className="w-full rounded-2xl h-full flex bg-tr bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${pimage})`}}></div>
                                )}
                            </div>
                            <div className='max-w-full flex items-center justify-center'>
                                <span className='max-w-full text-base font-bold transform-none text-center mt-1 p-0 block text-[#767676] overflow-hidden text-ellipsis flex-nowrap'>
                                    {email}
                                </span>
                            </div>
                            <hr className='bg-black h-[2px] max-w-full my-6'></hr>
                            <div className='max-w-full h-[500px] overflow-x-auto whitespace-nowrap'>
                                <SettingsOption path='manage-categories' name='Manage Categories' icon={faEdit} />
                                <SettingsOption path='user-management' name='User Management' icon={faUserEdit} />
                            </div>
                        </div>
                        <div className='max-w-full w-full'>          
                            {/* Page Render */}
                            {showHash === "#manage-categories" && (
                                <div className='max-w-full overflow-x-auto whitespace-nowrap'>
                                    <ManageCategory />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Settings;