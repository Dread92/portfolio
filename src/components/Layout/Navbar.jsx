import React, { useEffect } from 'react';
import './navbar.scss';
import logoImage from '../../assets/webdev.png';
import { Link } from 'react-scroll'; // Import Link from react-scroll

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
        <li>
          {/* Use Link from react-scroll for smooth scrolling */}
          <Link
            to="homePage__secondblock"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70} // Adjust the offset if needed to account for your navbar's height
          >
            About
          </Link>
        </li>
        <li>
          {/* Use Link from react-scroll for smooth scrolling */}
          <Link
            to="homePage__thirdblock"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70} // Adjust the offset if needed to account for your navbar's height
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
