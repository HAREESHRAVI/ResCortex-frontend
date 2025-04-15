import React, { useState } from 'react';
import ResultDisplay from '/src/components/ResultDisplay/ResultDisplay.jsx';
import './ImageUpload.css';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    if (!image) {
      alert('Please upload an MRI image first.');
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    setLoading(true);
    setResult(null); // Clear previous result

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setTimeout(() => {
          setResult(data);
          setLoading(false);
        }, 2000);
      } else {
        console.error("Prediction error:", data.error);
        alert("Prediction failed. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Something went wrong while connecting to the server.");
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <h2>Upload MRI Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="file-input"
        />
        <p id="description">
          Upload your MRI image here for tumor detection.
        </p>
        <button className="predict-button" onClick={handlePredict}>
          Predict Tumor
        </button>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
          <p>Analyzing MRI image... Please wait.</p>
        </div>
      )}

      {/* Show Result */}
      {!loading && result && <ResultDisplay result={result} />}
    </div>
  );
};

export default ImageUpload;
