import { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';

function Welcome() {
  return (
    <div>
      <div className="background-image"></div>
      <div className="logo-greenhaven"></div>
      <AboutUs />
      
    </div>
  );
}

export default Welcome;
