import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className="navbar1">
        <div className='navbar-left'> 
            <h1>ResCortex</h1>
        </div>
    
    <div className='navbar-right'>
        <ul className="nav-menu">
            <li className="nav-menu-item">Home</li>
            <li className="nav-menu-item">About Us</li>
            <li className="nav-menu-item">Mission</li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Navbar