import React, { useEffect } from 'react';
import './HomePage.scss';

function HomePage() {
  useEffect(() => {
    // Function to handle the scroll animation
    const handleScrollAnimation = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const isVisible = elementTop - window.innerHeight < 0;

        if (isVisible && !element.classList.contains('show')) {
          element.classList.add('show');
        }
      });
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className='homePage__container'>
      <div className='homePage__firstblock'>
        <div className='homePage__text'>Hi, i'm Guillaume</div>
        <div className='homePage__text__description'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</div>
        <h1 className='homePage__button'>PROJECTS</h1>
        <i className="fa-sharp fa-solid fa-arrow-down fa-bounce arrowDown"></i>
      </div>

      <div className='homePage__secondblock'>
        <div className='homePage__text__secondblock animate-on-scroll'>About Me</div>
        <div className='homePage__subBlock'>
        <div className='homePage__text__description__secondblock animate-on-scroll'>
  Passionate about computers and new technology since childhood, I decided in 2018 to transition what was once a hobby into a professional career. After spending a few years in the <a href='https://www.gendarmerie.interieur.gouv.fr/' target='_blank' rel='noopener noreferrer'>Armed Forces</a> of my native country, I pursued a role as a computer technician for{' '}
  <a href='https://www.ldlc.com/' target='_blank' rel='noopener noreferrer'>
    LDLC
  </a>
  , France's largest computer retailer. In 2022, I applied for a government-sponsored program to obtain a college degree in web development, through <a href='https://openclassrooms.com/fr/' target='_blank' rel='noopener noreferrer'>OpenClassrooms</a>. I successfully graduated in July 2023, primarily focusing on front-end development.
</div>
        </div>
        <h2 className='title__skills animate-on-scroll'>My Skills</h2>
        <div className='homePage__skills-container'>
          <div className='homePage__skills'>
            <div className='homePage__skills__list animate-on-scroll'>HTML</div>
            <div className='homePage__skills__list animate-on-scroll'>CSS</div>
            <div className='homePage__skills__list animate-on-scroll'>JavaScript</div>
            <div className='homePage__skills__list animate-on-scroll'>React</div>
            <div className='homePage__skills__list animate-on-scroll'>SASS</div>
            <div className='homePage__skills__list animate-on-scroll'>Vite</div>
            <div className='homePage__skills__list animate-on-scroll'>GIT</div>
            <div className='homePage__skills__list animate-on-scroll'>Github</div>
            <div className='homePage__skills__list animate-on-scroll'>Express Js</div>
            <div className='homePage__skills__list animate-on-scroll'>Node Js</div>
          </div>
        </div>
      </div>

      <div className='homePage__thirdblock'>
        <div className='homePage__text__thirdblock animate-on-scroll'>Hi, i'm Guillaume</div>
        <div className='homePage__text__description__thirdblock animate-on-scroll'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</div>
      </div>
    </div>
  );
}

export default HomePage;
