import React from 'react';

export default function SearchBar() {
  return (
    <div className=" md:m-auto mt-4 m-auto px-4 md:w-[50%] md:flex justify-center text-center ">
      <div className="relative flex w-full  flex-wrap items-stretch ">
        <input
          type="search"
          className="relative m-0 -mr-0.5 block w-92 min-w-0 flex-auto rounded-l border border-solid bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-gray-900 outline-none transition duration-200 ease-in-out focus:z-3 focus:border-blue-500 focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-gray-600 dark:text-gray-200 dark:placeholder-text-gray-200 dark:focus:border-blue-500 "
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon1"
        />

        {/* Search button */}
        <button
          className="relative z-2 flex items-center rounded-r bg-red-300 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-400 hover:shadow-lg focus:bg-red-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-500 active:shadow-lg"
          type="button"
          id="button-addon1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="black"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
