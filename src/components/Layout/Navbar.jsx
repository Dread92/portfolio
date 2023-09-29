import React, { useEffect } from 'react';
import './navbar.scss';
import logoImage from '../../assets/webdev.png';

function Navbar() {
  useEffect(() => {
    // Add the 'show' class after a delay to trigger the translateY animation
    setTimeout(() => {
      const navbar = document.querySelector('.navbar');
      navbar.classList.add('show');
    }, 500); // Adjust the delay (in milliseconds) as needed
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logoImage} alt="Logo" />
        <div className="navbar__text">
          Guillaume Blanc
          <br />
          Web Developer
        </div>
      </div>
      <ul className="navbar__links">
        <li><a href="/">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
