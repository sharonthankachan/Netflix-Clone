import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Netflix_Logo_RGB.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Netflix Logo" className="navbar-logo" />
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li className="navbar-close" onClick={closeMenu}>X</li>
          <li><a href="/">Home</a></li>
          <li><a href="/">TV Shows</a></li>
          <li><a href="/">Movies</a></li>
          <li><a href="/">New & Popular</a></li>
          <li><a href="/">My List</a></li>
        </ul>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
