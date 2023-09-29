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
        <div className='homePage__text__description__secondblock animate-on-scroll'>Passionate about computers and new technology since childhood, I decided in 2018 to transition what was once a hobby into a professional career. After spending a few years in the Armed Forces of my native country, I pursued a role as a computer technician for LDLC, France's largest computer retailer. In 2022, I applied for a government-sponsored program to obtain a college degree in web development. I successfully graduated in July 2023, primarily focusing on front-end development.</div>
        </div>
        <h2 className='title__Skills animate-on-scroll'>My Skills</h2>
        <div className='homePage__skills-container'>
        <div className='homePage__skills '>
        <div className='homePage__skills__list '>HTML</div>
        <div className='homePage__skills__list '>CSS</div>
        <div className='homePage__skills__list '>JavaScript</div>
        <div className='homePage__skills__list '>React</div>
        <div className='homePage__skills__list '>SASS</div>
        <div className='homePage__skills__list '>Vite</div>
        <div className='homePage__skills__list '>GIT</div>
        <div className='homePage__skills__list '>Github</div>
        <div className='homePage__skills__list '>Express Js</div>
        <div className='homePage__skills__list '>Node Js</div>
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
