import PropTypes from 'prop-types'

function DiscountCard(props) {

    const { name } = props.restaurantInfo;

    return (
        <div className='cursor-pointer rounded-lg overflow-hidden bg-green-600 relative snap-start max-w-full p-0' style={{flex: "0 0 calc(50% - 7px"}}>
            <a className='decoration-inherit cursor-pointer'>
                <div className='min-h-[156px] h-full max-w-full flex items-stretch justify-start flex-row'>
                    <div className='min-w-[308px] flex-1 px-[14px] py-6 max-w-full'>
                        <span className='font-bold text-xl text-white text-left'>
                            Get $5 off on dinner orders $25+ at {name} (5pm - 9pm)
                        </span>
                        <div className='max-w-full flex items-stretch justify-start mt-2'>
                            <span className='font-medium text-sm text-white text-left'>
                                Now - 2/27. Terms apply.
                            </span>
                        </div>
                        <div className='mt-3'>
                            <button className='relative max-w-full inline-flex items-center justify-start rounded-full border border-medium cursor-pointer transition duration-150 ease-in-out select-none text-center bg-green-500 shadow focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 text-white'>
                                <span className='block flex-grow max-w-full opacity-100'>
                                    <span className='max-w-full flex items-center justify-center flex-row'>
                                        <span className='flex-grow-[2] min-w-0 flex justify-center'>
                                            <span className='w-full text-md p-1 font-bold text-center truncate'>
                                                Order now
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='flex-1 bg-cover bg-repeat ml-0' style={{backgroundImage: `url('https://i3.wp.com/hypebeast.com/image/2023/06/shake-shack-hong-kong-pistachio-shake-release-info-03.png')`, backgroundPosition: "left center"}}></div>
                </div>
            </a>
        </div>
    );
}

DiscountCard.propTypes = {
    restaurantInfo: PropTypes.string.isRequired,
};

export default DiscountCard;