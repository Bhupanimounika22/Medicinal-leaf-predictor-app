// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import ImageSlider from './ImageSlider';


function HomePage() {
  return (
    <div className="home-hero">
             <div className="slider"><ImageSlider /></div>

      <div className="container">
        <h1>Welcome to the Leaf & Plant Predictor</h1>
        <p>Discover the wonders of medicinal plants and their uses. Start your journey by exploring our vast library or by identifying a plant from a picture.</p>
        <Link to="/predict" className="btn btn-primary">Start Predicting</Link>
        <div className="row mt-5">
          <div className="col-md-6">
            <h2>Why Use Our Tool?</h2>
            <p>Our predictor uses advanced algorithms to accurately identify medicinal plants from images, providing you with detailed information about each plant's uses and benefits.</p>
            <p>Leaves are not just vital for a plant's survival but also hold numerous health benefits for humans. From ancient times, leaves have been used in herbal medicine to treat various ailments. For instance, the leaves of the neem tree are known for their antiseptic properties, while the leaves of the moringa plant are packed with essential nutrients.</p>

          </div>
          <div className="col-md-6">
            <img src="/images/alovera.jpg" alt="Plants" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
