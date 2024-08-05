import React, { useState } from 'react';
import './Prediction.css';

function Prediction() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [modelType, setModelType] = useState('leaf');
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleModelTypeChange = (event) => {
    setModelType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select an image file.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('model_type', modelType);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error in API response');
      }

      const data = await response.json();
      setPrediction(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="prediction container">
      <h2>Predict Leaf or Plant Type</h2>
      <p>Upload an image of a leaf or plant and select the model type to get the prediction. The prediction includes the common name, scientific name, and potential uses of the plant.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="imageUpload">Select an image:</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            id="imageUpload"
            onChange={handleFileChange}
          />
        </div>
        {previewUrl && (
          <div className="preview">
            <h3>Image Preview:</h3>
            <img src={previewUrl} alt="Preview" className="img-thumbnail" />
          </div>
        )}
        <div className="form-group model-selection">
          <label>Select Model:</label>
          <div className="form-check">
            <input
              type="radio"
              value="leaf"
              checked={modelType === 'leaf'}
              className="form-check-input"
              id="leafModel"
              onChange={handleModelTypeChange}
            />
            <label className="form-check-label" htmlFor="leafModel">Leaf Model</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              value="plant"
              checked={modelType === 'plant'}
              className="form-check-input"
              id="plantModel"
              onChange={handleModelTypeChange}
            />
            <label className="form-check-label" htmlFor="plantModel">Plant Model</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Predict</button>
      </form>

      {prediction && (
        <div className="prediction-result mt-5">
          <h3>Prediction Result</h3>
          {prediction.image && (
            <div className="predicted-image">
              <img src={`data:image/jpeg;base64,${prediction.image}`} alt="Predicted" className="img-thumbnail" />
            </div>
          )}
          <p><strong>Label:</strong> {prediction.label}</p>
          <p><strong>Scientific Name:</strong> {prediction.scientific_name}</p>
          <p><strong>Uses:</strong> {prediction.uses}</p>
          <p><strong>Description:</strong> {prediction.description}</p>

        </div>
      )}
    </div>
  );
}

export default Prediction;
