import React from 'react'
import "./navbar.scss"
import logoImage from "../assets/webdev.png" // Adjust the path to your image


function Navbar() {
  return (
    <nav className="navbar">
    <div className='navbar__logo'>
    <img src={logoImage} alt="Logo" />
    </div>
    <div><h1>TEST</h1></div>
  </nav>
  )
}

export default Navbar