import React from 'react';
import {
    AiOutlineUser,
    AiOutlineMail,
    AiOutlinePhone,
    AiOutlineLock,
    AiOutlinePushpin,
    AiOutlineEnvironment
} from "react-icons/ai";
import {Link,Outlet} from "react-router-dom"
const registration = () => {
    return (
        <div className=' flex justify-center items-center text-center bg-[url("./assets/bg1.jpeg")] bg-no-repeat bg-center bg-cover h-[100vh] m-0 p-0  box-border font-serif '>
            <div className="w-[521px] px-[30px] py-[10px]  bg-[rgba(247,179,179,0.46)] rounded-[10px] ">
            <div className="text-[33px] font-semibold mb-[35px] mt-[10px] text-[#0a0a0a]">
                Register Yourself
            </div>
            <form action="#">
                <div className="flex">
                    <div className=" h-[40px] w-full flex relative pr-[10px]">
                        <input onFocus={
                                (e) => e.target.parentNode.querySelector('label').classList.add('hidden')
                            }
                            onBlur={
                                (e) => {
                                    if (!e.target.value) {
                                        e.target.parentNode.querySelector('label').classList.remove('hidden');
                                    }
                                }
                            }
                            className=' h-full w-full pl-[45px] outline-[none] border-none text-lg bg-[white] text-[#595959] rounded-[25px] focus:shadow-sm'
                            type="text"
                            required/>
                        <span className='ml-[10px] mt-0  absolute text-[#595959] w-[50px] top-[10px] leading-[50px]'><AiOutlineUser/></span>
                        <label className='absolute top-2/4 transform -translate-y-1/2 left-[45px] hover:hidden pointer-events-none text-[#666666]'>First Name</label>
                    </div>
                    <div className=" h-[40px] w-full flex relative">
                        <input className='h-full w-full pl-[45px] outline-[none] border-none text-lg bg-[white] text-[#595959] rounded-[25px] focus:shadow-sm'
                            onFocus={
                                (e) => e.target.parentNode.querySelector('label').classList.add('hidden')
                            }
                            onBlur={
                                (e) => {
                                    if (!e.target.value) {
                                        e.target.parentNode.querySelector('label').classList.remove('hidden');
                                    }
                                }
                            }
                            type="text"
                            required/>
                        <span className='ml-[10px] mt-0  absolute text-[#595959] w-[50px] top-[10px] leading-[50px]'><AiOutlineUser/></span>
                        <label className='absolute top-2/4 transform -translate-y-1/2 left-[45px] pointer-events-none text-[#666666]'>Last Name</label>
                    </div>
                </div><br/>
                <div className=" h-[40px] w-full flex relative">
                    <input className='h-full w-full pl-[45px] outline-[none] border-none text-lg bg-[white] text-[#595959] rounded-[25px] focus:shadow-sm'
                        onFocus={
                            (e) => e.target.parentNode.querySelector('label').classList.add('hidden')
                        }
                        onBlur={
                            (e) => {
                                if (!e.target.value) {
                                    e.target.parentNode.querySelector('label').classList.remove('hidden');
                                }
                            }
                        }
                        type="email"
                        required/>
                    <span className='ml-[10px] mt-0  absolute text-[#595959] w-[50px] top-[10px] leading-[50px]'><AiOutlineMail/></span>
                    <label className='absolute top-2/4 transform -translate-y-1/2 left-[45px] pointer-events-none text-[#666666]'>Email ID</label>
                </div>
                <br/>
                <div className="password">
                    <div className=" h-[40px] w-full flex relative">
                        <input className='h-full w-full pl-[45px] outline-[none] border-none text-lg bg-[white] text-[#595959] rounded-[25px] focus:shadow-sm'
                            onFocus={
                                (e) => e.target.parentNode.querySelector('label').classList.add('hidden')
                            }
                            onBlur={
                                (e) => {
                                    if (!e.target.value) {
                                        e.target.parentNode.querySelector('label').classList.remove('hidden');
                                    }
                                }
                            }
                            type="password"
                            required/>
                        <span className='ml-[10px] mt-0 absolute text-[#595959] w-[50px] top-[10px] leading-[50px]'><AiOutlineLock/></span>
                        <label className='absolute top-2/4 transform -translate-y-1/2 left-[45px] pointer-events-none text-[#666666]'>Create Password</label>
                    </div><br/>
                    <div className="h-[40px] w-full flex relative">
                        <input className='h-full w-full pl-[45px] outline-[none] border-none text-lg bg-[white] text-[#595959] rounded-[25px] focus:shadow-sm'
                            onFocus={
                                (e) => e.target.parentNode.querySelector('label').classList.add('hidden')
                            }
                            onBlur={
                                (e) => {
                                    if (!e.target.value) {
                                        e.target.parentNode.querySelector('label').classList.remove('hidden');
                                    }
                                }
                            }
                            type="password"
                            required/>
                        <span className='ml-[10px] mt-0 absolute text-[#595959] w-[50px] top-[10px] leading-[50px]'><AiOutlineLock/></span>
                        <label className='absolute top-2/4 transform -translate-y-1/2 left-[45px] pointer-events-none text-[#666666]'>Confirm Password</label>
                    </div>
                </div><br/>
                <button className='mx-[0] my-[15px] w-full h-[50px] text-lg leading-[50px] font-semibold rounded-[25px] border-none outline-[none] cursor-pointer [box-shadow:2px_2px_5px_#BABECC,_-5px_-5px_10px_#ffffff73]  bg-black text-red-300  focus:text-[#fa6363]  focus:[box-shadow:inset_2px_2px_5px_#BABECC,]
                                                     inset -5px -5px 10px #ffffff73;'>Register</button>
                <div className="mx-[0] my-[10px] text-[#676867] text-base">
                    Already a member?
                    <Link to="/">
                    <div className='text-red-400 no-underline pl-[5px] hover:underline' href="login.js">Login</div>
                    </Link>
                </div>
            </form>
        </div>
        </div>
    );
    <Outlet/>
}

export default registration;
