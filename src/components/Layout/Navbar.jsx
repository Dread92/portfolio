import React, { useEffect, useState } from 'react';
import './navbar.scss';
import logoImage from '../../assets/webdev.png';
import { Link as ScrollLink } from 'react-scroll'; // Rename one of the imports
import { Link as RouterLink } from 'react-router-dom'; // Rename the other import




// Function to convert temperature from Kelvin to Celsius
const convertKelvinToCelsius = (temperature) => {
  return (temperature - 273.15).toFixed(2);
};

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
      const apiKey = import.meta.env.VITE_API_KEY
      console.log(import.meta.env.VITE_API_KEY)

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
       < RouterLink className='projectLink ' to="/">
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
      < RouterLink className='projectLink ' to="/">
        <li><a>Home</a></li>
</RouterLink>

        < RouterLink className='projectLink ' to="/projects">
        <li><a>Projects</a></li></RouterLink>
        <li>
          {/* Use Link from react-scroll for smooth scrolling */}
          <ScrollLink
            to="homePage__secondblock"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70} // Adjust the offset if needed to account for your navbar's height
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
            offset={-70} // Adjust the offset if needed to account for your navbar's height
          >
            Contact
          </ScrollLink>
        </li>
        </ul>
        {weatherData && (
          <ul className='navbar__weather'>
          <li className="navbar__weather__list">
            <div>
              {/* Display city name */}
              <span>City: {weatherData.name}</span>
            </div>
            <div>
              {/* Display temperature in Celsius */}
              <span>Temperature: {convertKelvinToCelsius(weatherData.main.temp)}°C</span>
            </div>
            <div>
              {/* Display weather description */}
              <span>Weather: {weatherData.weather[0].description}</span>
            </div>
            <div>
              {/* Display weather icon */}
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
