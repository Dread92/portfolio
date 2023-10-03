import React, { useEffect, useState } from 'react';
import './navbar.scss';
import logoImage from '../../assets/webdev.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

// Function to convert temperature from Kelvin to Celsius
const convertKelvinToCelsius = (temperature) => {
  return (temperature - 273.15).toFixed(2);
};

function Navbar() {
  const [weatherData, setWeatherData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Add the 'show' class after a delay to trigger the translateY animation
    setTimeout(() => {
      const navbar = document.querySelector('.navbar');
      navbar.classList.add('show');
    }, 500);

    // Fetch weather data when the component mounts
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}`);

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <nav className="navbar">
      <RouterLink className="projectLink" to="/">
        <div className="navbar__logo">
          <img src={logoImage} alt="Logo" />
          <div className="navbar__text">
            Guillaume Blanc
            <br />
            Web Developer
          </div>
        </div>
      </RouterLink>

      <ul className="navbar__links">
        <RouterLink className="projectLink" to="/">
          <li><a>Home</a></li>
        </RouterLink>
        <RouterLink className="projectLink" to="/projects">
          <li><a>Projects</a></li>
        </RouterLink>
        {location.pathname !== '/projects' && ( // Conditionally render ScrollLink components
          <>
            <li>
              {/* Use Link from react-scroll for smooth scrolling */}
              <ScrollLink
                to="homePage__secondblock"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                About
              </ScrollLink>
            </li>
            <li>
              {/* Use Link from react-scroll for smooth scrolling */}
              <ScrollLink
                to="homePage__thirdblock"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                Contact
              </ScrollLink>
            </li>
          </>
        )}
      </ul>
      {weatherData && (
        <ul className='navbar__weather'>
          <li className="navbar__weather__list">
            <div>
              <span>City: {weatherData.name}</span>
            </div>
            <div>
              <span>Temperature: {convertKelvinToCelsius(weatherData.main.temp)}°C</span>
            </div>
            <div>
              <span>Weather: {weatherData.weather[0].description}</span>
            </div>
            <div>
              <img
                src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt={weatherData.weather[0].description}
              />
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
