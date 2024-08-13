import React from 'react';
import Footer from '../Components/Footer/Footer';
import AboutUs from '../Components/AboutUs/AboutUs';
import ContactUs from '../Components/ContactUs/ContactUs';
import './HomePage.css';
import Home from '../Components/Home/Home';
import { Box } from '@mui/material';
import Mission from '../Components/Mission/Mission';
import Strategy from '../Components/Strategy/Strategy';

const HomePage = () => {
  return (
    <Box p={0} m={0}>
      <section id="home">
        <Home />
      </section>
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="mission">
        <Mission />
      </section>
      <section id="strategy">
        <Strategy />
      </section>
      <section id="contact-us">
        <ContactUs />
      </section>
      <Footer />
    </Box>
  );
};

export default HomePage;
