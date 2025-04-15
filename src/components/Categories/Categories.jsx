import React from 'react';
import './Categories.css';

const Categories = () => {
  const cards = [
    {
      image: "/src/assets/glioma.jpg",
      title: "Glioma Tumor",
      description: "Gliomas are a type of brain tumor that originate from glial cells, which support and protect neurons in the brain. They are among the most common and aggressive brain tumors, often growing rapidly and infiltrating surrounding brain tissue. Gliomas can impact vital brain functions depending on their location and severity.",
      button: "Read more",
      link: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/gliomas" // External URL for glioma tumor
    },
    {
      image: "/src/assets/meningioma.jpeg",
      title: "Meningioma Tumor",
      description: "Meningiomas are tumors that develop from the meninges, the protective membranes covering the brain and spinal cord. Most meningiomas are non-cancerous and grow slowly, but their size and location can cause pressure on the brain, leading to symptoms like headaches, vision problems, or seizures.",
      button: "Read more",
      link: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/meningioma" // External URL for meningioma tumor
    },
    {
      image: "/src/assets/pituitary.jpg",
      title: "Pituitary Tumor",
      description: "Pituitary tumors form in the pituitary gland, located at the base of the brain. These tumors can be benign (non-cancerous) or malignant (cancerous) and may affect hormone production, leading to various symptoms like fatigue, vision problems, and changes in growth or metabolism.",
      button: "Read more",
      link: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/pituitary-tumors" // External URL for pituitary tumor
    },
    {
      image: "/src/assets/no_tumor.jpg",
      title: "No Tumor",
      description: "No tumor refers to MRI scans where no abnormal growths or tumors are detected in the brain. These scans show a healthy brain with no signs of conditions like gliomas, meningiomas, or pituitary tumors, indicating no presence of any pathological changes",
      button: "Read more",
      link: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/brain-tumor" // External URL for no tumor
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
