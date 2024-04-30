import axios from "axios";
import { useEffect, useState } from "react";

import { BACKEND_URL } from "../constants";
import { useNavigate } from "react-router-dom";

// function ManageUser() {

//     
//     const [searchName, setSearchName] = useState('');
//    
//     const handleNameChange = (event) => setSearchName(event.target.value)
//    

//     const navigate = useNavigate();

//     

//     // return (
//     //     <div className='max-w-full pl-10 py-5'>
//     //         <div className='max-w-full mb-4'>
//     //             <div className='max-w-full flex items-center justify-start flex-row'>
//     //                 <span className='text-3xl font-bold tracking-tight transform-none text-[#191919] text-left m-0 p-0 block'>
//     //                     Search User
//     //                 </span>
//     //             </div>
//     //             <span className='mt-3 text-base font-medium transform-none text-left m-0 p-0 block text-[#767676]'>This section displays searched users</span>
//     //         </div>
//     //         <div className='max-w-full'>
//     //             <div className='flex'>
//     //                 <form>
//     //                     <div className='max-w-full mb-4 min-w-[300px]'>
//     //                         <div className='w-full'>
//     //                             <div className='max-w-full'>
//     //                                 <div className='max-w-full flex justify-between items-end flex-row'>
//     //                                     <label className='text-base font-bold text-[#191919] text-left m-0 p-0 block'>Search Email Address</label>
//     //                                 </div>
//     //                                 <div className='flex min-h-10 mt-2'>
//     //                                     <div className='text-base font-medium text-[#191919] flex items-center w-full rounded-lg z-[1] px-3 py-0 bg-[#F7F7F7]'>
//     //                                         <div className='flex-grow bg-inherit max-w-full my-auto'>
//     //                                             <input 
//     //                                                 type='email'
//     //                                                 value={searchName}
//     //                                                 onChange={handleNameChange}
//     //                                                 required
//     //                                                 autoComplete="given-name" 
//     //                                                 className='text-base font-medium w-full outline-none flex bg-inherit appearance-none' />
//     //                                         </div>
//     //                                     </div>
//     //                                 </div>
//     //                             </div>
//     //                         </div>
//     //                     </div>
//     //                 </form>
//     //             </div>
//     //         </div> 
//     //         <div className='max-w-full mt-10 mb-4'>
//     //             <div className='max-w-full flex items-center justify-start flex-row'>
//     //                 <span className='text-3xl font-bold tracking-tight transform-none text-[#191919] text-left m-0 p-0 block'>
//     //                     Results
//     //                 </span>
//     //             </div>
//     //             <span className='mt-3 text-base font-medium transform-none text-left m-0 p-0 block text-[#767676]'>
//     //                 Found
//     //             </span>
//     //         </div>       
//     //     </div>
//     // );

function ManageUser() {

    const [userData, setUserData] = useState(null);
    const [id, setId] = useState('');
    

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.get(`${BACKEND_URL}/user/${id}`);
            setUserData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

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
                    <form onSubmit={handleSubmit}>
                        <div className='max-w-full mb-4 min-w-[300px]'>
                            <div className='w-full'>
                                <div className='max-w-full'>
                                    <div className='max-w-full flex justify-between items-end flex-row'>
                                        <label className='text-base font-bold text-[#191919] text-left m-0 p-0 block'>Search User ID</label>
                                    </div>
                                    <div className='flex min-h-10 mt-2'>
                                        <div className='text-base font-medium text-[#191919] flex items-center w-full rounded-lg z-[1] px-3 py-0 bg-[#F7F7F7]'>
                                            <div className='flex-grow bg-inherit max-w-full my-auto'>
                                                <input 
                                                    type='text'
                                                    value={id}
                                                    onChange={(e) => setId(e.target.value)}
                                                    required
                                                    autoComplete="off" 
                                                    className='text-base font-medium w-full outline-none flex bg-inherit appearance-none' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className='relative max-w-full m-0 mt-8 p-0 flex min-h-10 w-full items-center justify-center rounded-3xl cursor-pointer select-none text-center bg-[#191919] text-white'>
                            <span className='block flex-grow max-w-full px-3'>
                                <span className='max-w-full flex justify-center items-center flex-row'>
                                    <span className='flex-grow-[2] min-w-0 flex justify-center'>
                                        <span className='w-full text-base font-bold text-center m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap'>
                                            Submit
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </button> 
                    </form>
                </div>
            </div>
            
            <div className='max-w-full mt-10 mb-4'>
                <div className='max-w-full flex items-center justify-start flex-row'>
                    <span className='text-3xl font-bold tracking-tight transform-none text-[#191919] text-left m-0 p-0 block'>
                        Results
                    </span>
                </div>
                <div className='max-w-full'>
                <div className='flex'>
                    <div className='max-w-full flex justify-start flex-col gap-2'>
                    {userData !== null && (
                        Object.entries(userData).map(([key, value], index) => (
                            <div className='max-w-full flex justify-between items-center gap-80 py-5 px-5 bg-zinc-100 rounded-2xl' key={index}>
                            <div className='max-w-full p-0 m-0'>
                        <span className='text-sm font-medium text-center m-0 p-0 block'>{`${key}: ${value}`}</span>
                        </div>
                    </div>
                        ))
                    )}
                    </div>
                </div>
                </div>
            </div>       
        </div>
    );
}


export default ManageUser;