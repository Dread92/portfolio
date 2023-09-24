import React from 'react'
import "./navbar.scss"
import logoImage from "../assets/webdev.png" // Adjust the path to your image


function Navbar() {
  return (
    <nav className="navbar">
    <div className='navbar__logo'>
    <img src={logoImage} alt="Logo" />
    </div>
    <ul className="navbar__links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
  </nav>
  )
}

export default Navbar