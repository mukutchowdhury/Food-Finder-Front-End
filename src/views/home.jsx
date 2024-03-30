import main_icon from '../assets/main-icon.png'
import table from '../assets/table.png'

import image  from '../assets/bg.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faArrowAltCircleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeView() {

    const [zipcode, setZipcode] = useState(null);

    const navigate = useNavigate();
    const handleZipcodeChange = (event) => setZipcode(event.target.value);


    const [redirect, setRedirect] = useState(true);
    useEffect(() => {
        const id = localStorage.getItem('userid');
        if (id !== null) {
            navigate('/home');
        } else {
            setRedirect(false)
        }
    }, [navigate]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (zipcode.toString().length !== 5) {
            alert("a valid zipcode has five digits");
        } else {
            localStorage.setItem('zipcode', zipcode);
            navigate('/home');
        }
    }

    const navToSignup = () => {
        navigate('/signup');
    }

    if (!redirect) {
        return (
            <>
                <main>
                    <div>
                        <div className='relative z-0'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='h-[650px] py-0 px-2 flex items-center w-full z-[1] justify-center bg-style-yellow bg-cover bg-center bg-no-repeat' style={{flexFlow: 'column', backgroundImage: `url(${image})`}}>
                                    <div className='my-0 flex justify-center'>
                                        <div className='max-w-full flex items-center justify-start flex-row'>
                                            <div className='max-w-full px-4'>
                                                <div className='flex justify-center items-center h-12 sticky t-0 z-[2] bg-transparent border-b-[#D6D6D6] px-0 mt-4'>
                                                    <div className='max-w-full flex items-center justify-start flex-row'>
                                                        <a className='decoration-inherit select-none'>
                                                            <div className='max-w-full flex items-center justify-center flex-row'>
                                                                <img className='block w-14 h-14 object-cover box-border' src={main_icon} style={{ objectPosition: '50% 50%' }} ></img>
                                                                <div className='ml-2'>
                                                                    <span className='w-full transition-colors text-base font-boldtracking-normal text-center overflow-hidden whitespace-nowrap box-border'>
                                                                        <span className='transition-colors block text-4xl font-bold tracking-tighte text-[#d69a2bc6] box-border'>
                                                                            FOOD 
                                                                            <span className='text-gray-700'>
                                                                                FINDER
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex-grow flex flex-col items-center justify-center'>
                                        <div className='flex justify-center mb-12 shadow-inner bg-white'>
                                            <span className='text-[#d69a2bc6] text-center max-w-[750px] text-4xl font-bold tracking-tightblock'>
                                                Local tastes await, just steps from you!
                                            </span>
                                        </div>
                                        <div className='absolute left-0 right-0 top-0 mt-4 z-[1]'>
                                            <div className='pr-6 flex justify-end gap-2'>
                                                <a href='/signin'className='relative max-w-full m-0 p-0 shadow-xl inline-flex min-h-10 w-auto items-center justify-start rounded-3xl cursor-pointer select-none bg-style-yellow text-white'>
                                                    <span className='block flex-grow max-w-full px-3'>
                                                        <span className='max-w-full flex items-center justify-center flex-row'>
                                                            <span className='flex-grow-[2] min-w-0 flex justify-center'>
                                                                <span className='w-full text-base font-bold text-center m-0 p-0 block max-w-full overflow-hidden text-ellipsis text-nowrap'>
                                                                    <span className='text-lg font-bold tracking-tighter text-white block'>
                                                                        Sign In
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </a>
                                                <a href='/signup' className='relative max-w-full m-0 p-0 shadow-xl inline-flex min-h-10 w-auto items-center justify-start rounded-3xl cursor-pointer select-none bg-white text-white'>
                                                    <span className='block flex-grow max-w-full px-3'>
                                                        <span className='max-w-full flex items-center justify-center flex-row'>
                                                            <span className='flex-grow-[2] min-w-0 flex justify-center'>
                                                                <span className='w-full text-base font-bold text-center m-0 p-0 block max-w-full overflow-hidden text-ellipsis text-nowrap'>
                                                                    <span className='text-lg font-bold tracking-tighter text-[#494949] block'>
                                                                        Sign Up
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-center items-center w-full max-w-full'>
                                            <div className='block'>
                                                <div>
                                                    <div>
                                                        <div className='min-w-[408px] w-full relative my-0 mx-auto'>
                                                            <form onSubmit={handleSubmit}>
                                                                <div className='w-full bg-white rounded-[2rem] shadow-xl'>
                                                                    <div className='max-w-full'>
                                                                        <div className='flex min-h-[40px]'>
                                                                            <div className='w-full text-base font-medium flex flex-row justify-center items-center py-3 pr-3 pl-5'>
                                                                                <div className='max-w-full mr-3'>
                                                                                    <div className='flex justify-center items-center'>
                                                                                        <FontAwesomeIcon icon={faLocationDot} className="text-gray-400" style={{ fontSize: "1.15rem" }} />
                                                                                    </div>
                                                                                </div>
                                                                                <div className='flex-grow bg-inherit max-w-full mr- ml-auto'>
                                                                                    <input value={zipcode} onChange={handleZipcodeChange} type='text' placeholder='Enter zipcode' required maxLength={5}
                                                                                    className='text-ellipsis text-base font-medium w-full outline-none flex bg-inherit appearance-none m-0 p-0' />
                                                                                </div>
                                                                                <div className='max-w-full mr-2 cursor-pointer' onClick={handleSubmit}>
                                                                                    <div className='flex justify-center items-center'>
                                                                                        <FontAwesomeIcon icon={faArrowAltCircleRight} className="text-[#d69a2bc6]" style={{ fontSize: "2.15rem" }}/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='max-w-[1184px]'>
                                        <div className='my-24 flex-row flex justify-center max-w-full p-4'>
                                            <div className='flex-row flex justify-center h-full'>
                                                <div className='flex w-full min-w-[360px] max-w-full p-4' style={{flexFlow: 'column'}}>
                                                    <div className='mr-20 flex justify-center'>
                                                        <img src={table} className='h-[154px] w-[154px]'></img>
                                                    </div>
                                                    <div className='flex w-full max-w-[250px] min-h-[500px]' style={{flexFlow: 'column'}}>
                                                        <div className='max-w-full'>
                                                            <span className='text-[#191919] text-4xl font-semibold text-center block'>Become a Vendor</span>
                                                            <span className='text-[#191919] text-base font-medium tracking-wide text-center block mt-2'>
                                                                As a food vendor, you operate your own virtual restaurant, managing menus and orders to satisfy customers&apos; needs effectively.
                                                            </span>
                                                        </div>
                                                        <button onClick={navToSignup} className='justify-center outline-0 p-0 mt-2 cursor-pointer items-center flex'>
                                                            <span className='text-[#d69a2bc6] text-lg font-semibold block mr-1'>Start earning</span>
                                                            <FontAwesomeIcon icon={faArrowRight} className='text-[#d69a2bc6]'/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </> 
        );
    }

    return null;
}


export default HomeView;