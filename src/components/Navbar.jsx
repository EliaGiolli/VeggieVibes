import React from 'react'
import { FaSearch } from "react-icons/fa";
import './Navbar.css'

function Navbar() {
  return (
    <nav className='nav-container'>
      <img src="/VeggieVibesLogo.png" alt="VeggieVibes logo" className='logo' />
      <div className='nav-links'>
        <ul>
          <li className='about'>About us</li>
          <li className='recipies-page'>Our recipies</li>
          <li className='contacts'>Contacts</li>
        </ul>
      </div>
      <div className='nav-input-div'>
          <FaSearch className='nav-icon' />
          <input type="text" className='nav-input' placeholder="Search..."  />
      </div>
    </nav>
  )
}

export default Navbar