import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';

const Footer = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000); // Adjust the timeout value based on your desired scroll duration
  };

  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/guillaume-blanc-820bb528a/" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Dread92" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
        </a>
        
      </div>
      <span>Made with React.js+Vite and SASS</span>
      <button className={`back-to-top ${isScrolling ? 'scrolling' : ''}`} onClick={handleScrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </footer>
  );
};

export default Footer