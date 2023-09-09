import React from 'react'
import Navbar from "./Navbar.js"
import SearchBar from "./Searchbar";
import Header from "./Header";
import Carousel from "./Carousels";
const home = () => {
  return (
  <>
    <Navbar/>
    <SearchBar/>
    <Carousel/>
    <Header/>
</>
  )
}

export default home
