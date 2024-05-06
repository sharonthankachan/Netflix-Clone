import React from 'react'
import './Navbar.css'
import logo from '../../assets/Netflix_Logo_RGB.png'
import { FaBell, FaRegUserCircle, FaSearch } from "react-icons/fa";
import { useState } from 'react';


function Navbar() {
  const[search, setSearch]=useState(false)

  function handleSearch() {
    setSearch(!search)
    
  }
  let searchinitial=<a onClick={handleSearch}><FaSearch/></a>
  let searchClicked=<><input type="search" className='searchbar' placeholder='Search  Movies, Series, etc.'/><a onClick={handleSearch}><FaSearch/></a></>
                   

  return (
    <div className='navbar col'>
        <div className="left col">
            <img src={logo} alt="Netflix Logo" className='logo'/>
            <div className="left_nav_items">
              <a href="" >Home</a>
              <a href="">TV Shows</a>
              <a href="">Movies</a>
              <a href="">New & Popular</a>
              <a href="">My List</a>
            </div>
        </div>
        <div className="right col">
            <div className="right_nav_items">
            {search?searchClicked:searchinitial}
              <a href="">KIDS</a>
              <a href="">DVD</a>
              <a href=""><FaBell/></a>
              <a href=""><FaRegUserCircle className='nav_icon'/></a>
              
            </div>
        </div>
    </div>
  )
}

export default Navbar