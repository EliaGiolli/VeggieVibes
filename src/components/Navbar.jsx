import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa"; 
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); 
  };

  return (
    <nav className='nav-container'>
      <img src="/VeggieVibesLogo.png" alt="VeggieVibes logo" className='logo' />
      <div className='nav-links'>
        <ul>
          <li className='about'>
            <Link to="/about">About us</Link>
          </li>
          <li className='recipies-page'>
            <Link to="/Search4Recipies">Our recipes</Link>
          </li>
          <li className='contacts'>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
      <div className='nav-input-div'>
          <FaSearch className='nav-icon' />
          <input type="text" className='nav-input' placeholder="Search..." />
      </div>
      <section className='hamburger-menu' onClick={toggleDropdown}>
        <FaBars className='hamburger-icon' /> 
      </section>
      {isDropdownOpen ? (
        <div className='dropdown'>
         <ul>
          <li className='about'>
            <Link to="/about">About us</Link>
          </li>
          <li className='recipies-page'>
            <Link to="/Search4Recipies">Our recipes</Link>
          </li>
          <li className='contacts'>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;