import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'

const BUTTON_STYLE = 'button';
const DROP_DOWN_STYLE = 'dropdown';

function FilterCard(props) {

    const { filterName, filterStyle, filterIcon} = props

    if (filterStyle === BUTTON_STYLE) {
        return (
            <button className='relative max-w-full m-0 p-0 flex min-h-8 w-full items-center justify-center rounded-3xl border border-medium cursor-pointer transition duration-150 ease-in-out select-none text-center bg-gray-200 shadow-inner text-gray-900 ml-0'>
                <span>
                    <span>
                        <span className='flex-grow=[2] min-w-0 flex justify-center'>
                            <span className='w-full font-bold text-sm truncate text-center max-w-full block py-1 px-4 m-0 transform-none tracking-tight'>
                                <div className='max-w-full flex items-center justify-start flex-row gap-1'>
                                    {filterIcon !== undefined && (
                                        <FontAwesomeIcon icon={filterIcon} style={{ transform: 'scale(1.2)' }} />
                                    )}
                                    {filterName}
                                </div>
                            </span>
                        </span>
                    </span>
                </span>
            </button>    
        )
    } else if (filterStyle === DROP_DOWN_STYLE) {
        return (
            <>
            {/* DROP DOWN FILTER LIKE PRICE OR STAR */}
            </>
        )
    }
}

FilterCard.propTypes = {
    filterName: PropTypes.string.isRequired,
    filterStyle: PropTypes.string.isRequired,
    filterIcon: PropTypes.object,
};

export default FilterCard;