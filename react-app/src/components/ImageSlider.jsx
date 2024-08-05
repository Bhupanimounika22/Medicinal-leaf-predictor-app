// src/components/ImageSlider.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './ImageSlider.css';

const images = [
  { src: '/images/slider1.jpg', alt: 'Slide 1', caption: 'Tualsi' },
  { src: '/images/slider2.jpg', alt: 'Slide 2', caption: 'Fresh Basil Leaves' },
  { src: '/images/slider3.jpg', alt: 'Slide 3', caption: 'Mint Plants' },
  // Add more images as needed
];

function ImageSlider() {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image.src}
            alt={image.alt}
          />
          <Carousel.Caption>
            <h3>{image.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageSlider;
