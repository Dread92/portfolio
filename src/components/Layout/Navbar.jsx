import React, { useEffect, useState } from 'react';
import './navbar.scss';
import logoImage from '../../assets/webdev.png';
import { Link } from 'react-scroll'; // Import Link from react-scroll

function Navbar() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Add the 'show' class after a delay to trigger the translateY animation
    setTimeout(() => {
      const navbar = document.querySelector('.navbar');
      navbar.classList.add('show');
    }, 500); // Adjust the delay (in milliseconds) as needed

    // Fetch weather data when the component mounts
    fetchWeatherData();
  }, []);

// Function to fetch weather data from your API
const fetchWeatherData = async () => {
  try {
    // Access the API key from the environment variable
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    // Replace 'YOUR_WEATHER_API_ENDPOINT' with your weather API endpoint
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
        {weatherData && (
          <li className="navbar__weather">
            <div>
              {/* Display weather description */}
              <span>Weather: {weatherData.current.weather_descriptions[0]}</span>
            </div>
            <div>
              {/* Display temperature */}
              <span>Temperature: {weatherData.current.temperature}&deg;C</span>
            </div>
            <div>
              {/* Display weather icon */}
              <img
                src={weatherData.current.weather_icons[0]}
                alt={weatherData.current.weather_descriptions[0]}
              />
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
