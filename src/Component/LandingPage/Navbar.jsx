import React from 'react';
// import logo from '../../assets/logo1.png';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>Home</li>
                        <li class="relative group">
                            <a href="#" class="hover:text-gray-300">Destinations</a>
                            <ul class="hidden w-max absolute top-full left-0 bg-red-700 py-2 px-4 rounded-md shadow-md group-hover:block">
                                <li class="text-white hover:text-gray-300">Overview of Girivan</li>
                                <li class="text-white hover:text-gray-300">Location and Accessibility</li>
                                <li class="text-white hover:text-gray-300">Natural Beauty and Surroundings</li>
                                <li class="text-white hover:text-gray-300">Climate and Best Time to Visit</li>
                                <li class="text-white hover:text-gray-300">Unique Features and Attractions</li>
                            </ul>
                        </li>
                        <li>
                            <a>About Us</a>
                            <ul className="p-2">
                                <li>Introduction to Girivan Project</li>
                                <li>Vision and Mission</li>
                                <li>Our Team and Values</li>
                                <li>History and Development</li>
                                <li>Community and Social Initiatives</li>
                            </ul>
                        </li>
                        <li>
                            <a>Gallery</a>
                            <ul className="p-2">
                                <li>Photos of Girivan's Scenic Landscapes</li>
                                <li>Images of Farm Plots and Greenland Plots</li>
                                <li>Pictures of Mountview Sports Park and Activities</li>
                                <li>Captures of Events and Special Occasions</li>
                                <li>User-Submitted Photos and Testimonials</li>
                            </ul>
                        </li>
                        <li>
                            <a>Reservation</a>
                            <ul className="p-2">
                                <li>Booking Process and Guidelines</li>
                                <li>Farm Plot and Greenland Plot Reservation</li>
                                <li>Sports Park Activity Booking</li>
                                <li>Accommodation and Bungalow Reservation</li>
                                <li>Group Bookings and Special Packages</li>
                            </ul>
                        </li>
                        <li>Contact</li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Girivan</a>
            </div>
            <div className="">
                <ul className="flex">
                    <li>
                        <a>Home</a>
                    </li>
                    <li class="relative group">
                        <a href="#" class="hover:text-gray-300">Destinations</a>
                        <ul class="hidden w-max absolute top-full left-0 bg-red-700 py-2 px-4 rounded-md shadow-md group-hover:block">
                            <li class="text-white hover:text-gray-300">Overview of Girivan</li>
                            <li class="text-white hover:text-gray-300">Location and Accessibility</li>
                            <li class="text-white hover:text-gray-300">Natural Beauty and Surroundings</li>
                            <li class="text-white hover:text-gray-300">Climate and Best Time to Visit</li>
                            <li class="text-white hover:text-gray-300">Unique Features and Attractions</li>
                        </ul>
                    </li>

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;
