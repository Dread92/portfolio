import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import Main from '../Layout/Main';

const Template = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet /> {/* Place the Outlet component where child routes should be rendered */}
      </Main>
      <Footer />
    </>
  );
};

export default Template;
