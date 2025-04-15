import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Abstract from './components/Abstract/Abstract';
import Categories from './components/Categories/Categories';
import ModelInfo from './components/ModelInfo/ModelInfo';
import ImageUpload from './components/ImageUpload/ImageUpload';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Abstract />
      <Categories />
      <ModelInfo />
      <ImageUpload />
      <Footer />
    </div>
  );
};

export default App;
