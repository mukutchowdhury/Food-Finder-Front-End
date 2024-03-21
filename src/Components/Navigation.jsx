import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react';

import main_icon from '../assets/main-icon.png'
import ProfileSlide from './RestaurantShower/ProfileSlide';

function Navigation(props) {

    const menuRef = useRef(null);
    const profileRef = useRef(null);
    
    const { callback } = props
    const [zipcodeEntry, setZipcodeEntry] = useState('');
    const [isOpened, setIsOpen] = useState(false);

    const [pimage, setPimage] = useState('');

    const userid = localStorage.getItem('userid');

    const handleChange = (event) => {
        setZipcodeEntry(event.target.value);
    }

    const handleSubmit = (event) => {
        if (event.keyCode === 13) {
            callback(zipcodeEntry) 
        }
    }

    const handleOpen = () => {
        setIsOpen(!isOpened);
    }

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && profileRef &&
            !menuRef.current.contains(event.target) && 
            !profileRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    return (
        <>
            <header className='relative z-[400] pt-16 box-border'>
                <div className='fixed z-[100] top-0 left-0 h-16 w-screen flex items-center justify-between bg-white border-b border-gray-300 box-border'>
                    <div className='ml-16 max-w-full flex items-center justify-center flex-row'>
                        <div className='max-w-full flex items-stretch justify-start flex-row'>
                            <div className='flex-1 justify-center relative right-0 left-0 mt-auto mb-auto mr-24 ml-0 bg-gradient-to-r from-transparent via-white to-white'>
                                <a href={'/home'} className='decoration-inherit cursor-pointer'>
                                    <div className='max-w-full flex items-center justify-center flex-row'>
                                        <img className='block w-14 h-14 object-cover box-border' src={main_icon} style={{ objectPosition: '50% 50%' }} ></img>
                                        <div className='ml-2'>
                                            <span className='w-full transition-colors text-base font-boldtracking-normal text-center select-none overflow-hidden whitespace-nowrap box-border'>
                                                <span className='transition-colors block text-2xl font-bold tracking-tighter text-[#d69a2bc6] box-border'>
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
                    <div className='mr-[0px] justify-end items-center max-w-full w-full flex box-border flex-row'>
                        <div className='max-w-[460px] pr-0 box-border' style={{width: "inherit"}}>
                            <div className='box-border'>
                                <div className='box-border'>
                                    <div className='px-4 py-0 relative box-border'>
                                        <div className='w-full box-border cursor-text'>
                                            <div className='max-w-full box-border'>
                                                <div className='flex min-h-10 box-border'>
                                                    <div className='text-base font-medium tracking-normal text-gray-900 flex items-center w-full rounded-full z-10 px-3 py-2 border bg-gray-200 shadow-inner pr-2 box-border'>
                                                        <div className='max-w-full mr-3 box-border'>
                                                            <div className='flex justify-center items-center ml-2 mr-[2px] box-border'>
                                                                <FontAwesomeIcon icon={faSearch} />
                                                            </div>
                                                        </div>
                                                        <div className='flex-grow bg-inherit max-w-full mt-0 mr-auto box-border'>
                                                            <input className='text-ellipsis text-base font-medium tracking-normal w-full border outline-none flex-1 bg-transparent appearance-none m-0 p-0 box-border' 
                                                                type='text'
                                                                placeholder='Enter zipcode'
                                                                value={zipcodeEntry}
                                                                onChange={handleChange}
                                                                onKeyDown={handleSubmit}
                                                                maxLength={5}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-nowrap mr-10 items-center ml-2 box-border gap-2'>
                            {userid ? (
                                <a className='decoration-inherit cursor-pointer' onClick={handleOpen}>
                                <div className='max-w-full flex items-center justify-center flex-row' ref={profileRef}>
                                    {pimage === '' ? (
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300">
                                            <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-gray-300">
                                                <FontAwesomeIcon icon={faUser} />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 bg-transparent">
                                            <div className="w-full h-full rounded-full flex items-center justify-center bg-gray-300 bg-cover bg-transparent bg-center bg-no-repeat" style={{backgroundImage: `url(${pimage})`}}>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </a>
                            ) : (
                            <>
                            <a href='/signin' className='relative max-w-full m-0 p-0 inline-flex w-auto items-center justify-start rounded-full border cursor-pointer transition duration-150 ease-in-out select-none text-center bg-transparent shadow-outline border-gray-300 text-gray-700 box-border'>
                                <span className='block flex-grow max-w-full transition-opacity opacity-100 pt-0 px-3 box-border'>
                                    <span className='transition-colors max-w-full flex items-center justify-center flex-row box-border'>
                                        <span className='flex-grow-[2] min-w-0 transition-colors box-border'>
                                            <span className='w-full transition-colors text-base font-boldtracking-normal text-center overflow-hidden whitespace-nowrap box-border'>
                                                <span className='transition-colors block text-lg font-bold tracking-tighter text-gray-700 box-border'>
                                                    Sign In
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </a>
                            <a href='/signup' className='relative max-w-full m-0 p-0 inline-flex w-auto items-center justify-start rounded-full border bg-[#d69a2bc6] cursor-pointer transition duration-150 ease-in-out select-none text-center shadow-outline border-[#d69a2bc6] text-gray-700 box-border'>
                                <span className='block flex-grow max-w-full transition-opacity opacity-100 pt-0 px-3 box-border'>
                                    <span className='transition-colors max-w-full flex items-center justify-center flex-row box-border'>
                                        <span className='flex-grow-[2] min-w-0 transition-colors box-border'>
                                            <span className='w-full transition-colors text-base font-bold tracking-normal text-center overflow-hidden whitespace-nowrap box-border'>
                                                <span className='transition-colors block text-lg font-bold tracking-tighter text-white box-border'>
                                                    Sign Up
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </a>
                            </>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            {userid && (
                <div ref={menuRef} className={isOpened ? '' : 'hidden'}>
                    <ProfileSlide imageCallback={setPimage}/>
                </div>
            )}
        </>
    );
}

Navigation.propTypes = {
    callback: PropTypes.func.isRequired,
};

export default Navigation;