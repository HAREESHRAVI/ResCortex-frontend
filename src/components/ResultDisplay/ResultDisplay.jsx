import React from 'react';
import './ResultDisplay.css';

const ResultDisplay = ({ result }) => {
  // Added check for null result and default message if not provided
  if (!result) return null;

  const { image, prediction, confidence } = result;

  return (
    <div className="result-display">
      <h2>Prediction Result</h2>
      <div className="result-card">
        <img src={image} alt="Uploaded MRI" className="result-image" />
        <div className="result-info">
          <h3>
            Tumor Type: <span>{prediction}</span>
          </h3>
          <p>
            Confidence Score: <strong>{(confidence * 100).toFixed(2)}%</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
