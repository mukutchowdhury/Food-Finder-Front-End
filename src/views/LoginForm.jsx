import { useNavigate } from "react-router-dom";
import HeaderLogo from "../Components/HeaderLogo/HeaderLogo";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { BACKEND_URL } from '../constants.js';
import axios from "axios";


export default function LoginForm() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [respStatus, setRespStatus] = useState(null);

    const handleRedirect = () => {
        navigate('/signup')
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${BACKEND_URL}/user/login`, {
                "email": email,
                "password": password,
            });
            switch (response.data.status) {
                case 'ok':
                    localStorage.setItem('userid', response.data.userid)
                    navigate('/');
                    break;
                case '1A':
                    setRespStatus("Email does not exists");
                    break;
                case '1C':
                    setRespStatus("Password does not match");
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div style={{ height: "calc(100% + 48px)" }}>
            <div className='relative z-0'>
                <div className='h-full text-center flex justify-center items-center flex-col'>
                    <HeaderLogo />
                    <div className='bg-white px-0 h-full min-h-full max-w-none mx-0 flex justify-center items-center'>
                        <div className='w-[400px] min-h-[300px] bg-white'>
                            <div className='p-5 h-full w-full'>
                                <div>
                                    <span className='text-3xl font-bold tracking-tight text-[#191919] m-0 p-0 block'>Sign In</span>
                                    <div className='max-w-full mb-4'>
                                        <span className='text-base font-medium m-0 p-0 block text-[#767676]'>
                                            Don&apos;t have an account?
                                            <button onClick={handleRedirect} className='relative max-w-full m-0 ml-1 p-0 inline-flex w-auto items-center justify-center rounded-3xl cursor-pointer select-none text-center bg-transparent text-[#d69a2bc6] ring-blue-300 ring-opacity-0 ring-0'>
                                                <span className='block flex-grow max-w-full opacity-100 p-0'>
                                                    <span className='max-w-full flex items-center justify-center flex-row'>
                                                        <span className='flex-grow-[2] min-w-0 flex justify-center'>
                                                            <span className='w-full text-base font-bold text-center m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap'>
                                                                Sign Up
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </button>
                                        </span>
                                    </div>
                                    <form onSubmit={handleSubmit}>
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
                                                            Sign In
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
            </div>
        </div>
    );
}

