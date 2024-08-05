// src/components/About.jsx
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="container">
        <h1>About Us</h1>
        <p>
          Welcome to the Leaf & Plant Predictor, a powerful tool designed to help you identify medicinal plants and discover their numerous benefits. Our platform is built on cutting-edge technology,
           leveraging Convolutional Neural Networks (CNNs) to accurately classify plants based on images. This advanced deep learning model enables us to analyze the intricate patterns and features of 
           plant leaves, providing you with precise identifications and comprehensive information about their uses.
        </p>
        <p>
          Medicinal plants have been used for centuries in various cultures around the world for their healing properties.
           They play a crucial role in modern medicine, contributing to the development of drugs and therapies for
            numerous ailments. At Leaf & Plant Predictor, we aim to make the knowledge of these plants accessible 
            to everyone. Our tool is not only useful for botanists and researchers but also for enthusiasts and the
             general public who wish to explore the natural world.
        </p>
        <p>
          The CNN algorithm at the core of our model works by processing input images through multiple layers of 
          convolutional filters. These filters detect essential features, such as edges, shapes, and textures, 
          which are crucial for identifying specific plant species. Our model has been trained on a diverse dataset 
          of medicinal plants, allowing it to recognize a wide variety of species accurately. Once a plant is
           identified, the platform provides detailed information about its scientific name and various uses,
            making it a valuable resource for learning and discovery.
        </p>
        <p>
          Join us on this journey of exploration and education. Whether you're a student, a researcher, or 
          simply curious about the natural world, the Leaf & Plant Predictor is your gateway to understanding the 
          fascinating world of medicinal plants. Start exploring today and uncover the secrets of nature's pharmacy!
        </p>
      </div>
    </div>
  );
}

export default About;
