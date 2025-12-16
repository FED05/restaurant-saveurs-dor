import React from 'react';
import Home from './Home';
import Dishes from './Dishes';
import About from './About';
import Contact from './Contact';

const MainPage = () => {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="dishes">
        <Dishes />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default MainPage;