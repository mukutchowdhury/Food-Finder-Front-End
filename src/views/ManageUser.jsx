import { useState } from "react";

function ManageUser() {

    const [searchName, setSearchName] = useState('');
    const handleNameChange = (event) => setSearchName(event.target.value)


    return (
        <div className='max-w-full pl-10 py-5'>
            <div className='max-w-full mb-4'>
                <div className='max-w-full flex items-center justify-start flex-row'>
                    <span className='text-3xl font-bold tracking-tight transform-none text-[#191919] text-left m-0 p-0 block'>
                        Search User
                    </span>
                </div>
                <span className='mt-3 text-base font-medium transform-none text-left m-0 p-0 block text-[#767676]'>This section displays searched users</span>
            </div>
            <div className='max-w-full'>
                <div className='flex'>
                    <form>
                        <div className='max-w-full mb-4 min-w-[300px]'>
                            <div className='w-full'>
                                <div className='max-w-full'>
                                    <div className='max-w-full flex justify-between items-end flex-row'>
                                        <label className='text-base font-bold text-[#191919] text-left m-0 p-0 block'>Search Email Address</label>
                                    </div>
                                    <div className='flex min-h-10 mt-2'>
                                        <div className='text-base font-medium text-[#191919] flex items-center w-full rounded-lg z-[1] px-3 py-0 bg-[#F7F7F7]'>
                                            <div className='flex-grow bg-inherit max-w-full my-auto'>
                                                <input 
                                                    type='email'
                                                    value={searchName}
                                                    onChange={handleNameChange}
                                                    required
                                                    autoComplete="given-name" 
                                                    className='text-base font-medium w-full outline-none flex bg-inherit appearance-none' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div> 
            <div className='max-w-full mt-10 mb-4'>
                <div className='max-w-full flex items-center justify-start flex-row'>
                    <span className='text-3xl font-bold tracking-tight transform-none text-[#191919] text-left m-0 p-0 block'>
                        Results
                    </span>
                </div>
                <span className='mt-3 text-base font-medium transform-none text-left m-0 p-0 block text-[#767676]'>
                    Found
                </span>
            </div>       
        </div>
    );
}


export default ManageUser;