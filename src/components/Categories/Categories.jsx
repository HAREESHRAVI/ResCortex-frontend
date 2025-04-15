import React from 'react';
import './Categories.css';
import gliomaImage from './assets/glioma.jpg';
import meningiomaImage from './assets/meningioma.jpeg';
import pituitaryImage from './assets/pituitary.jpg';
import noTumorImage from './assets/no_tumor.jpg';

const Categories = () => {
  const cards = [
    {
      image: gliomaImage,
      title: "Glioma Tumor",
      description: "Gliomas are a type of brain tumor...",
      button: "Read more",
      link: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/gliomas",
    },
    {
      image: meningiomaImage,
      title: "Meningioma Tumor",
      description: "Meningiomas are tumors that develop...",
      button: "Read more",
      link: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/meningioma",
    },
    {
      image: pituitaryImage,
      title: "Pituitary Tumor",
      description: "Pituitary tumors form in the pituitary gland...",
      button: "Read more",
      link: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/pituitary-tumors",
    },
    {
      image: noTumorImage,
      title: "No Tumor",
      description: "No tumor refers to MRI scans...",
      button: "Read more",
      link: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/brain-tumor",
    },
  ];
  
  return (
    <>
      <div className="categories-section">
        <h2 className="categories-title">CATEGORIES</h2>
        <p className="categories-content">
          This model can classify three types of brain tumors.
        </p>

        <div className="card-container">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.image} alt="Card" className="card-image" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <a href={card.link} target="_blank" rel="noopener noreferrer" className="card-button">
                {card.button}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
