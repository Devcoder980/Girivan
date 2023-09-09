import React, {useState} from 'react';
import axios from 'axios';

// import './login.css'; // Make sure to adjust the path to your stylesheet
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import {Link, Outlet} from "react-router-dom"

const LoginForm = () => {
    const [emailid, setemailid] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
      e.preventDefault();
        try {
                setIsLoading(true);
                const response = await axios.post("https://jobmanagementw.onrender.com/api/user/login",
                    {"email":emailid, "password":password});
                const token = response.data.token;
                setIsLoading(false);
                window.location.href = "/";
            } catch (error) {
                console.error("Login error:", error);
                setIsLoading(false);
                alert("Login failed.Please check your emailid and password")
            }
          };
        return (
          <>
         

            <div className='m-0 p-0 box-border font-serif grid place-items-center text-center bg-[url("./assets/bg1.jpeg")] bg-no-repeat bg-cover h-[100vh]'>
                <div className="w-[330px] px-[30px] pt-[40px]  bg-[rgba(247,179,179,0.46)]  rounded-[10px]">
                    <div className=" text-[33px] font-semibold mb-[35px] text-[#0a0a0a]">
                        Login
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className=" h-[50px] w-full flex relative">
                          <input type="email" 
                          value={emailid}
                          onChange={(e)=>setemailid(e.target.value)} />
                             </div>
                        <div className=" h-[50px] w-full flex relative">
                            <input type="text"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                             />
                        </div>
                        <button 
                        type='submit'
                        className='mx-[0] my-[15px] w-full h-[50px] text-lg leading-[50px] font-semibold rounded-[25px] border-none outline-[none] cursor-pointer [box-shadow:2px_2px_5px_#BABECC,_-5px_-5px_10px_#ffffff73]  bg-black text-red-300  focus:text-[#fa6363]  focus:[box-shadow:inset_2px_2px_5px_#BABECC,]
                                                                                 inset -5px -5px 10px #ffffff73;'>Login</button>
                        <div className=" mx-[0] my-[10px] text-[#595959] text-base">
                            Not a member?
                            <Link to="/registration">
                                <div className="text-red-400 no-underline pl-[5px] pt-[10px] hover:underline">Registration Now</div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <Outlet/>
            </>
        ); 
    }

    export default LoginForm;
