import React from 'react'
import './Abstract.css'
const Abstract = () => {
    return (
        <div className="abstract-section">
          <h2 className="abstract-title">ABSTRACT</h2>
          <p className="abstract-content">
            Brain tumors are abnormal growths of cells within the brain, and their early detection is crucial for effective treatment. Unfortunately, manual analysis of MRI scans can be time-consuming, and the risk of human error is always present. To address this challenge, we have developed ResCortex, a custom deep learning model built upon ResNet-50, designed specifically to detect and classify brain tumors from MRI images automatically. By utilizing advanced preprocessing techniques and powerful neural networks, ResCortex extracts critical features from the scans, improving the accuracy and speed of diagnosis. This AI-driven system helps healthcare professionals identify tumor types quickly and with greater precision, ultimately supporting faster decision-making and better patient outcomes.
          </p>
        </div>
      );
    }

export default Abstract