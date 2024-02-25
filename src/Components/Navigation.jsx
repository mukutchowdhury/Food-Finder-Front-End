import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'
import { useState } from 'react';

function Navigation(props) {

    const { callback } = props
    const [zipcodeEntry, setZipcodeEntry] = useState('');

    const handleChange = (event) => {
        setZipcodeEntry(event.target.value);
    }

    const handleSubmit = (event) => {
        if (event.keyCode === 13) {
            callback(zipcodeEntry) 
        }
    }

    return (
        <>
            <header className='relative z-[400] pt-16 box-border'>
                <div className='fixed z-[100] top-0 left-0 h-16 w-screen flex items-center justify-between bg-white border-b border-gray-300 box-border'>
                    <div></div>
                    <div className='mr-[104px] justify-end items-center max-w-full flex box-border'>
                        <div className='cursor-text max-w-[460px] pr-0 box-border' style={{width: "inhert"}}>
                            <div className='box-border'>
                                <div className='box-border'>
                                    <div className='pt-0 pr-4 relative box-border'>
                                        <div className='w-full box-border'>
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
                            <a className='relative max-w-full m-0 p-0 inline-flex w-auto items-center justify-start rounded-full border cursor-pointer transition duration-150 ease-in-out select-none text-center bg-transparent shadow-outline border-gray-300 text-gray-700 box-border'>
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
                            <a className='relative max-w-full m-0 p-0 inline-flex w-auto items-center justify-start rounded-full border bg-green-600 cursor-pointer transition duration-150 ease-in-out select-none text-center shadow-outline border-gray-300 text-gray-700 box-border'>
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
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

Navigation.propTypes = {
    callback: PropTypes.string.isRequired,
};

export default Navigation;