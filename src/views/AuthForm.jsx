import { useNavigate } from "react-router-dom";
import HeaderLogo from "../Components/HeaderLogo/HeaderLogo";

export default function AuthForm() {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/signin')
    }

    return (
        <div className='h-full text-center flex justify-center items-center flex-col'>
            <HeaderLogo />
            <div className='bg-white px-0 h-full min-h-full max-w-none mx-0 flex justify-center items-center'>
                <div className='w-[400px] min-h-[300px] bg-white'>
                    <div className='p-5 h-full w-full'>
                        <div>
                            <span className='text-3xl font-bold tracking-tight text-[#191919] m-0 p-0 block'>Sign Up</span>
                            <div className='max-w-full mb-4'>
                                <span className='text-base font-medium m-0 p-0 block text-[#767676]'>
                                    Already have an account?
                                    <button onClick={handleRedirect} className='relative max-w-full m-0 ml-1 p-0 inline-flex w-auto items-center justify-center rounded-3xl cursor-pointer select-none text-center bg-transparent text-[#d69a2bc6] ring-blue-300 ring-opacity-0 ring-0'>
                                        <span className='block flex-grow max-w-full opacity-100 p-0'>
                                            <span className='max-w-full flex items-center justify-center flex-row'>
                                                <span className='flex-grow-[2] min-w-0 flex justify-center'>
                                                    <span className='w-full text-base font-bold text-center m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap'>
                                                        Sign In
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </button>
                                </span>
                            </div>
                            <form >
                                <div className='max-w-full mb-4'>
                                    <div className='flex justify-between'>
                                        <div className='w-[49%] flex'>
                                            <div className='w-full'>
                                                <div className='max-w-full'>
                                                    <div className='max-w-full flex justify-between items-end flex-row'>
                                                        <label className='text-base font-bold text-[#191919] text-left m-0 p-0 block'>First Name</label>
                                                    </div>
                                                    <div className='flex min-h-10 mt-2'>
                                                        <div className='text-base font-medium text-[#191919] flex items-center w-full rounded-lg z-[1] px-3 py-0 bg-[#F7F7F7]'>
                                                            <div className='flex-grow bg-inherit max-w-full my-auto'>
                                                                <input type="text" autoComplete="given-name" className='text-base font-medium w-full outline-none flex bg-inherit appearance-none' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[49%] flex'>
                                            <div className='w-full'>
                                                <div className='max-w-full'>
                                                    <div className='max-w-full flex justify-between items-end flex-row'>
                                                        <label className='text-base font-bold text-[#191919] text-left m-0 p-0 block'>Last Name</label>
                                                    </div>
                                                    <div className='flex min-h-10 mt-2'>
                                                        <div className='text-base font-medium text-[#191919] flex items-center w-full rounded-lg z-[1] px-3 py-0 bg-[#F7F7F7]'>
                                                            <div className='flex-grow bg-inherit max-w-full my-auto'>
                                                                <input type="text" autoComplete="given-name" className='text-base font-medium w-full outline-none flex bg-inherit appearance-none' />
                                                            </div>
                                                        </div>
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
                                                <label className='text-base font-bold text-[#191919] text-left m-0 p-0 block'>Email</label>
                                            </div>
                                            <div className='flex min-h-10 mt-2'>
                                                <div className='text-base font-medium text-[#191919] flex items-center w-full rounded-lg z-[1] px-3 py-0 bg-[#F7F7F7]'>
                                                    <div className='flex-grow bg-inherit max-w-full my-auto'>
                                                        <input type="text" autoComplete="given-name" className='text-base font-medium w-full outline-none flex bg-inherit appearance-none' />
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
                                                <label className='text-base font-bold text-[#191919] text-left m-0 p-0 block'>Password</label>
                                            </div>
                                            <div className='flex min-h-10 mt-2'>
                                                <div className='text-base font-medium text-[#191919] flex items-center w-full rounded-lg z-[1] px-3 py-0 bg-[#F7F7F7]'>
                                                    <div className='flex-grow bg-inherit max-w-full my-auto'>
                                                        <input type="password" autoComplete="given-name" className='text-base font-medium w-full outline-none flex bg-inherit appearance-none' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className='relative max-w-full m-0 mt-8 p-0 flex min-h-10 w-full items-center justify-center rounded-3xl cursor-pointer select-none text-center bg-[#d69a2bc6] text-white'>
                                    <span className='block flex-grow max-w-full px-3'>
                                        <span className='max-w-full flex justify-center items-center flex-row'>
                                            <span className='flex-grow-[2] min-w-0 flex justify-center'>
                                                <span className='w-full text-base font-bold text-center m-0 p-0 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap'>
                                                    Sign Up
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

