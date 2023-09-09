import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import * as React from "react";
import logo from "../assets/logo.png"
import {Link,Outlet} from "react-router-dom"

function NavBar() {
    const [open, isOpen] = React.useState(false);
    return (
    <nav className=" justify-between shadow-lg font-mono w-full">
        <div className="flex justify-between items-center  bg-gray-900">
            <div style={
                    {whiteSpace: "nowrap"}
                }
                className="ml-[20px]">
                <img className="w-[7cm] h-[2cm]  "
                    src={logo}
                    alt=""/>
            </div>
            <div className="md:flex hidden justify-between text-white text-right">
                <Link to="/insert">
                <div
                    style={
                        {
                            whiteSpace: "nowrap",
                        }
                    }
                    className="duration-200  text-[20px] block mr-3 ml-3 lg:inline-block  font-serif rounded pr-2 pl-2 mt-3 hover:border-b-4 border-red-300 pb-2 pt-1">
                    Add Record
                </div>
                </Link>
                <Link to="/update">
                <div
                    style={
                        {
                            whiteSpace: "nowrap",
                            fontSize: "20px"
                        }
                    }
                    className="duration-200 block mr-3 ml-3 lg:inline-block font-serif rounded pl-2 pr-2  mt-3 hover:border-b-4 border-red-300 pb-2 pt-1">
                    Update Record
                </div>
                </Link>
               <Link to="/delete">
               <div
                    style={
                        {
                            whiteSpace: "nowrap",
                            fontSize: "20px"
                        }
                    }
                    className="font-serif duration-200 block mr-3 ml-3 lg:inline-block rounded pl-2 pr-2  mt-3 hover:border-b-4 border-red-300 pb-2 pt-1">
                    Delete Record
                </div>
               </Link>
                
            </div>

            <div className="md:hidden block pr-4 " >
                {
                open ? (
                  <AiOutlineClose color="white" fontSize={28}
                  onClick={
                      () => isOpen(!open)
                  }/>
                ) : (
                  <AiOutlineMenu color="white" fontSize={28}
                  onClick={
                  () => isOpen(!open)
                        }/>
                )
            } </div>
        </div>
           { open ? 
            <div className="md:hidden block float-right  border-2 border-gray-500 bg-red-200">
                <Link to="/insert">
                <a href="#"
                    style={
                        {
                            whiteSpace: "nowrap",
                            fontSize: "20px"
                        }
                    }
                    className="font-sans duration-200 block mr-3 ml-3 lg:inline-block  rounded pr-2 pl-2 mt-3 hover:border-b-4 border-gray-700 pb-2 pt-1">
                    Add Record
                </a>
                </Link>
                <Link to="/update">
                <div
                    style={
                        {
                            whiteSpace: "nowrap",
                            fontSize: "20px"
                        }
                    }
                    className="font-sans duration-200 block mr-3 ml-3 lg:inline-block rounded pl-2 pr-2  mt-3 hover:border-b-4 border-gray-700 pb-2 pt-1">
                    Update Record
                </div>
                </Link>
                <Link to="/delete">
                <div
                    style={
                        {
                            whiteSpace: "nowrap",
                            fontSize: "20px"
                        }
                    }
                    className="font-sans duration-200 block mr-3 ml-3 lg:inline-block rounded pl-2 pr-2 mb-3 mt-3 hover:border-b-4 border-gray-700 pb-2 pt-1">
                    Delete Record
                </div>
                </Link>
            </div>
            : <div className="md:hidden hidden">
                <a href="#"
                    style={
                        {
                            whiteSpace: "nowrap",
                            fontSize: "20px"
                        }
                    }
                    className="font-sans duration-200 block mr-3 ml-3 lg:inline-block   pr-2 pl-2 mt-3 hover:border-b-4 border-gray-700 pb-2 pt-1">
                    Add Record
                </a>
                <a href="#"
                    style={
                        {
                            whiteSpace: "nowrap",
                            fontSize: "20px"
                        }
                    }
                    className="font-sans duration-200 block mr-3 ml-3 lg:inline-block pl-2 pr-2  mt-3 hover:border-b-4 border-gray-700 pb-2 pt-1">
                    Update Record
                </a>
                <a href="#"
                    style={
                        {
                            whiteSpace: "nowrap",
                            fontSize: "20px"
                        }
                    }
                    className="font-sans duration-200 block mr-3 ml-3 lg:inline-block  pl-2 pr-2  mt-3 hover:border-b-4 border-gray-700 pb-2 pt-1">
                    Delete Record
                </a>
            </div>}

            <Outlet/>
    </nav>
);

}

export default NavBar;
