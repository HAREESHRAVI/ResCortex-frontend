import React from 'react';
import bgImage from '../../assets/hero.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <img src={bgImage} alt="Hero" className="hero-img" />
      <div className="hero-overlay">
        <h1 className="hero-title">BRAIN TUMOR</h1>
        <h1 className="hero-title">CLASSIFICATION</h1>
        <div className="hero-divider"></div>
        <p className="hero-subtitle">Empowered by ResCortex AI</p>
      </div>
    </div>
  );
};

export default Hero;
