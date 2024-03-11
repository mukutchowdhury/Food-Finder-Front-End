import main_icon from '../../assets/main-icon.png'

function HeaderLogo() {
    return (
        <div className='flex justify-center items-center h-12 sticky t-0 z-[2] bg-white border-b-[#D6D6D6] px-0 mt-4'>
            <div className='max-w-full flex items-center justify-start flex-row'>
                <a href={'/'} className='decoration-inherit cursor-pointer'>
                    <div className='max-w-full flex items-center justify-center flex-row'>
                        <img className='block w-14 h-14 object-cover box-border' src={main_icon} style={{ objectPosition: '50% 50%' }} ></img>
                        <div className='ml-2'>
                            <span className='w-full transition-colors text-base font-boldtracking-normal text-center overflow-hidden whitespace-nowrap box-border'>
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
    );
}

export default HeaderLogo;
