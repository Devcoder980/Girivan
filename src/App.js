import "./App.css";
import React, {useEffect, useState} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/Login";
import Registation from "./components/Registration";
// import Navbar from "./components/navbar"
// import SearchBar from "./components/searchbar";
// import Header from "./components/header";
// import Carousel from "./components/carousels";
import Home from "./components/Home"
import Delete from "./components/Deleterecord"
import Update from "./components/Update"
import Insert from "./components/Insert"

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home
    },
    {
        path: "/registration",
        Component: Registation
    },

    {
        path: "/insert",
        Component: Insert
    },
    {
        path: "/update",
        Component: Update
    }, {
        path: '/delete',
        Component: Delete
    }
]);



function App() {
    
    const [login, setLotin] = useState(false);
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if (!token) {
            setLotin(true);
        }
    },[])
 
    return (
        <>{
            login===false ? <Login/>: <RouterProvider router={router}/>
        } </>
    );
}

export default App;
