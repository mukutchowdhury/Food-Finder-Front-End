import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SettingsOption(props) {

    const {name, path, icon} = props;

    return (
        <div className='max-w-full mt-2'>
            <a href={`/dev-settings#${path}`}>
                <div className='max-w-full rounded-md bg-white hover:bg-zinc-100 cursor-pointer'>
                    <div className='max-w-full flex items-center gap-4 p-2'>
                        <div className='max-w-full flex items-center justify-center flex-row'>
                            <div className="w-[25px] h-[25px] rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={icon} />
                            </div>
                        </div>
                        <div className='max-w-full'>
                            <span className='text-[.9375rem] leading-[1.3333] font-medium block text-black text-left overflow-hidden overflow-ellipsis whitespace-nowrap box-border select-none'>
                                {name}
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

SettingsOption.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired
};

export default SettingsOption;