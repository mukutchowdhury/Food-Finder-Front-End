import axios from "axios";
import { useEffect, useState } from "react";

import { BACKEND_URL } from "../constants";
import { useNavigate } from "react-router-dom";


function ManageCategory() {

    const [categoryData, setCategoryData] = useState(null);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // const [submitStatus, setSubmitStatus] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/category`);
                setCategoryData(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCategoryData();
    }, [])

    const handleDeleteCategory = async (name) => {
        try {
            await axios.delete(`${BACKEND_URL}/category/${name}`);
            navigate(0);
        } catch (error) {
            console.log(error);
        }
    }

    const handleInsertCategory = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${BACKEND_URL}/category`, {
                "name": name,
                "description": description
            });
            setName('');
            setDescription('');
            
            if (response.status === 200) {
                // setSubmitStatus('Good');
                navigate(0);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleNameChange = (event) => setName(event.target.value)
    const handleDescChange = (event) => setDescription(event.target.value)

    return (
        <div className='max-w-full pl-10 py-5'>
            <div className='max-w-full mb-4'>
                <div className='max-w-full flex items-center justify-start flex-row'>
                    <span className='text-3xl font-bold tracking-tight transform-none text-[#191919] text-left m-0 p-0 block'>
                        Active
                    </span>
                </div>
                <span className='mt-3 text-base font-medium transform-none text-left m-0 p-0 block text-[#767676]'>This section displays all currently active categories</span>
            </div>
            <div className='max-w-full'>
                <div className='flex'>
                    <div className='max-w-full flex justify-start flex-col gap-2'>
                        {categoryData !== null && (
                            Object.keys(categoryData).map((item, index) => (
                                <div className='max-w-full flex justify-between items-center gap-80 py-5 px-5 bg-zinc-100 rounded-2xl' key={index}>
                                    <div className='max-w-full p-0 m-0'>
                                        <span className='text-sm font-medium text-center m-0 p-0 block'>{item}</span>
                                    </div>
                                    <div onClick={() => handleDeleteCategory(item)} className='cursor-pointer'>
                                        <span className='text-sm font-medium text-center m-0 p-0 block text-red-600'>DELETE</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <div className='max-w-full mt-10 mb-4'>
                <div className='max-w-full flex items-center justify-start flex-row'>
                    <span className='text-3xl font-bold tracking-tight transform-none text-[#191919] text-left m-0 p-0 block'>
                        Insert Category
                    </span>
                </div>
                <span className='mt-3 text-base font-medium transform-none text-left m-0 p-0 block text-[#767676]'>
                    This section enables developers to add new categories
                </span>
            </div>
            <div className='max-w-full'>
                <div className='flex'>
                    <form onSubmit={handleInsertCategory}>
                        <div className='max-w-full mb-4'>
                            <div className='w-full'>
                                <div className='max-w-full'>
                                    <div className='max-w-full flex justify-between items-end flex-row'>
                                        <label className='text-base font-bold text-[#191919] text-left m-0 p-0 block'>Category Name</label>
                                    </div>
                                    <div className='flex min-h-10 mt-2'>
                                        <div className='text-base font-medium text-[#191919] flex items-center w-full rounded-lg z-[1] px-3 py-0 bg-[#F7F7F7]'>
                                            <div className='flex-grow bg-inherit max-w-full my-auto'>
                                                <input 
                                                    type="text"
                                                    value={name}
                                                    onChange={handleNameChange}
                                                    required
                                                    autoComplete="given-name" 
                                                    className='text-base font-medium w-full outline-none flex bg-inherit appearance-none pr-28' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-full mb-4'>
                            <div className='w-full'>
                                <div className='max-w-full'>
                                    <div className='max-w-full flex justify-between items-end flex-row'>
                                        <label className='text-base font-bold text-[#191919] text-left m-0 p-0 block'>Description</label>
                                    </div>
                                    <div className='flex min-h-10 mt-2'>
                                        <div className='text-base font-medium text-[#191919] flex items-center w-full rounded-lg z-[1] px-3 py-0 bg-[#F7F7F7]'>
                                            <div className='flex-grow bg-inherit max-w-full my-auto'>
                                                <textarea
                                                value={description}
                                                onChange={handleDescChange}
                                                required
                                                autoComplete="given-name"
                                                className='text-base font-medium w-full h-40 outline-none bg-inherit appearance-none resize-none py-2'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='relative max-w-full m-0 mt-8 p-0 flex min-h-10 w-full items-center justify-center rounded-3xl cursor-pointer select-none text-center bg-[#191919] text-white'>
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
                    {/* <div className='max-w-full mb-4'>
                        {submitStatus !== null && (
                        <div className='w-full'>
                            <div className='max-w-full'>
                                <div className='max-w-full flex justify-center items-center'>
                                    <span className='w-full text-base text-center m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-green-600'>
                                        {submitStatus}
                                    </span>
                                </div>
                            </div>
                        </div>
                        )}
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ManageCategory;