import { useNavigate } from "react-router-dom";
import HeaderLogo from "../Components/HeaderLogo/HeaderLogo";
import { useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { BACKEND_URL } from '../constants.js';

export default function AuthForm() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [respStatus, setRespStatus] = useState(null);

    const handleRedirect = () => {
        navigate('/signin');
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleFNameChange = (event) => {
        setFirstName(event.target.value);
    };
    
    const handleLNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${BACKEND_URL}/user/signup`, {
                "email": email,
                "password": password,
                "fname": firstName,
                "lname": lastName
            });
            switch (response.data.status) {
                case 'ok':
                    navigate('/signin');
                    break;
                case '1B':
                    setRespStatus("Email already exists");
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='h-full text-center flex justify-center items-center flex-col'>
            <HeaderLogo />
            <div className='bg-white px-0 h-full min-h-full max-w-none mx-0 flex justify-center items-center'>
                <div className='w-[400px] min-h-[300px] bg-white'>
                    <div className='p-5 h-full w-full'>
                        <div>
                            <span className='text-3xl font-bold tracking-tight text-[#191919] m-0 p-0 block'>Sign Up</span>
                            <div className='max-w-full mb-4'>
                                <span className='text-base font-medium m-0 p-0 block text-[#767676]'>
                                    Already have an account?
                                    <button onClick={handleRedirect} className='relative max-w-full m-0 ml-1 p-0 inline-flex w-auto items-center justify-center rounded-3xl cursor-pointer select-none text-center bg-transparent text-[#d69a2bc6] ring-blue-300 ring-opacity-0 ring-0'>
                                        <span className='block flex-grow max-w-full opacity-100 p-0'>
                                            <span className='max-w-full flex items-center justify-center flex-row'>
                                                <span className='flex-grow-[2] min-w-0 flex justify-center'>
                                                    <span className='w-full text-base font-bold text-center m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap'>
                                                        Sign In
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </button>
                                </span>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className='max-w-full mb-4'>
                                    <div className='flex justify-between'>
                                        <div className='w-[49%] flex'>
                                            <div className='w-full'>
                                                <div className='max-w-full'>
                                                    <div className='max-w-full flex justify-between items-end flex-row'>
                                                        <label className='text-base font-bold text-[#191919] text-left m-0 p-0 block'>First Name</label>
                                                    </div>
                                                    <div className='flex min-h-10 mt-2'>
                                                        <div className='text-base font-medium text-[#191919] flex items-center w-full rounded-lg z-[1] px-3 py-0 bg-[#F7F7F7]'>
                                                            <div className='flex-grow bg-inherit max-w-full my-auto'>
                                                                <input 
                                                                type="text"
                                                                value={firstName}
                                                                onChange={handleFNameChange}
                                                                required
                                                                autoComplete="given-name" 
                                                                className='text-base font-medium w-full outline-none flex bg-inherit appearance-none' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[49%] flex'>
                                            <div className='w-full'>
                                                <div className='max-w-full'>
                                                    <div className='max-w-full flex justify-between items-end flex-row'>
                                                        <label className='text-base font-bold text-[#191919] text-left m-0 p-0 block'>Last Name</label>
                                                    </div>
                                                    <div className='flex min-h-10 mt-2'>
                                                        <div className='text-base font-medium text-[#191919] flex items-center w-full rounded-lg z-[1] px-3 py-0 bg-[#F7F7F7]'>
                                                            <div className='flex-grow bg-inherit max-w-full my-auto'>
                                                                <input 
                                                                    type="text"
                                                                    value={lastName}
                                                                    onChange={handleLNameChange}
                                                                    required
                                                                    autoComplete="given-name" 
                                                                    className='text-base font-medium w-full outline-none flex bg-inherit appearance-none' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='max-w-full mb-4'>
                                    <div className='w-full'>
                                        <div className='max-w-full'>
                                            <div className='max-w-full flex justify-between items-end flex-row'>
                                                <label className='text-base font-bold text-[#191919] text-left m-0 p-0 block'>Email</label>
                                            </div>
                                            <div className='flex min-h-10 mt-2'>
                                                <div className='text-base font-medium text-[#191919] flex items-center w-full rounded-lg z-[1] px-3 py-0 bg-[#F7F7F7]'>
                                                    <div className='flex-grow bg-inherit max-w-full my-auto'>
                                                        <input 
                                                            type="email"
                                                            value={email}
                                                            onChange={handleEmailChange}
                                                            required
                                                            autoComplete="given-name" 
                                                            className='text-base font-medium w-full outline-none flex bg-inherit appearance-none' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='max-w-full mb-4'>
                                    <div className='w-full'>
                                        <div className='max-w-full'>
                                            <div className='max-w-full flex justify-between items-end flex-row'>
                                                <label className='text-base font-bold text-[#191919] text-left m-0 p-0 block'>Password</label>
                                            </div>
                                            <div className='flex min-h-10 mt-2'>
                                                <div className='text-base font-medium text-[#191919] flex items-center w-full rounded-lg z-[1] px-3 py-0 bg-[#F7F7F7]'>
                                                    <div className='flex-grow bg-inherit max-w-full my-auto'>
                                                        <input 
                                                            type="password" 
                                                            value={password}
                                                            onChange={handlePasswordChange}
                                                            required
                                                            autoComplete="given-name" 
                                                            className='text-base font-medium w-full outline-none flex bg-inherit appearance-none' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='max-w-full mb-4'>
                                    {respStatus !== null && (
                                    <div className='w-full'>
                                        <div className='max-w-full'>
                                            <div className='max-w-full flex justify-center items-center'>
                                                <span className='w-full text-base text-center m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-red-600'>
                                                    <FontAwesomeIcon icon={faTimes} style={{ color: 'red' }} className='mr-2' />
                                                    {respStatus}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                </div>
                                <button className='relative max-w-full m-0 mt-8 p-0 flex min-h-10 w-full items-center justify-center rounded-3xl cursor-pointer select-none text-center bg-[#d69a2bc6] text-white'>
                                    <span className='block flex-grow max-w-full px-3'>
                                        <span className='max-w-full flex justify-center items-center flex-row'>
                                            <span className='flex-grow-[2] min-w-0 flex justify-center'>
                                                <span className='w-full text-base font-bold text-center m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap'>
                                                    Sign Up
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

