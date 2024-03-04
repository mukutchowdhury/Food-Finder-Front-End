import PropTypes from 'prop-types'

function IconFilterCard(props) {

    const {filterName, filterImage, callback} = props;

    const handleClickAction = () => {
        callback(filterName);
        console.log(filterName)
    }
    return (
        <div className='ml-2 pl-[2px] snap-start relative max-w-full p-0'> 
            <div>
                <div className='flex items-center justify-center flex-col gap-1 cursor-pointer p-1 rounded-2xl w-auto whitespace-nowrap' onClick={handleClickAction}>
                    <div className='w-[60px] h-[60px] overflow-hidden block mx-auto'>
                        <img className='block w-full h-full object-cover box-border' src={filterImage} style={{ objectPosition: '50% 50%' }} ></img>
                    </div>
                    <span className='text-sm font-medium text-center m-0 p-0 block text-red-600'>{filterName}</span>
                </div>
            </div>
        </div>
    );
}

IconFilterCard.propTypes = {
    filterName: PropTypes.string.isRequired,
    filterImage: PropTypes.object.isRequired,
    callback: PropTypes.object.isRequired,
};

export default IconFilterCard;