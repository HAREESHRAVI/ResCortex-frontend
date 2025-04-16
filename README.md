# ResCortex - an Enhanced Deep Learning Model for Brain Tumor Classification

### B.Tech (IT) Final Year Project  
**Team Members:** Hareeshravi, Dharun Kumar, Dhivinkumar, Naveen Prasath

---

## Abstract

Brain tumors are abnormal growths of cells within the brain, and their early detection is crucial for effective treatment. Unfortunately, manual analysis of MRI scans can be time-consuming, and the risk of human error is always present. To address this challenge, we have developed **ResCortex**, a custom deep learning model built upon ResNet-50, designed specifically to detect and classify brain tumors from MRI images automatically. By utilizing advanced preprocessing techniques and powerful neural networks, ResCortex extracts critical features from the scans, improving the accuracy and speed of diagnosis. This AI-driven system helps healthcare professionals identify tumor types quickly and with greater precision, ultimately supporting faster decision-making and better patient outcomes.

---

## Dataset

We used the Brain Tumor MRI dataset containing T1-weighted contrast-enhanced MRI images, which are categorized into:

- Glioma Tumor  
- Meningioma Tumor  
- Pituitary Tumor  
- No Tumor

---

## Methodology

- **Step 1:** Image Preprocessing – Cropping, Augmentation, and Normalization  
- **Step 2:** Data Serialization – Pickling the preprocessed data for memory-efficient loading  
- **Step 3:** Model Design – Custom ResNet-50 architecture (ResCortex)  
- **Step 4:** Training with Hyperparameter Tuning  
- **Step 5:** Evaluation – Confusion Matrix, Precision, Recall, F1-Score, and Classification Report  
- **Step 6:** Deployment – React-based frontend with Flask backend for prediction API

---

## Model Performance

- **Validation Accuracy:** >94%  
- **F1 Score:** ~89%
- **Optimizer:** Adam  
- **Loss Function:** Categorical Crossentropy with Label Smoothing  
- **Features:** Class Weights, Early Stopping, Model Checkpointing  

---

## How to Contribute

- Fork the repository  
- Create your branch  
- Add new models inside `Contributions/Your_Name`  
- Include a README file detailing your approach

---

## Other Collaborators

- **Dharun Kumar**  
- **Dhivinkumar**  
- **Naveen Prasath**

---

## Tech Stack

- Python 3.7  
- TensorFlow / Keras  
- ReactJS  
- Flask  
- Google Colab (for model training)  
- Anime.js (for UI animations)
