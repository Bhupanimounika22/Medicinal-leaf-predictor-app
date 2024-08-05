// src/components/PlantUses.jsx
import React from 'react';
import ImageSlider from './ImageSlider';
import './PlantUses.css';

const plantUsesData = [
  {
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    uses: 'Skin care, digestion, immune support',
    image: '/images/alovera.jpg', // Replace with actual image paths
    description: 'Aloe Vera is known for its soothing and healing properties for the skin. It can be used to treat burns, cuts, and dry skin. Additionally, it supports digestion and boosts the immune system.',
  },
  {
    name: 'Basil',
    scientificName: 'Ocimum basilicum',
    uses: 'Anti-inflammatory, antioxidant, digestive aid',
    image: '/images/basil.jpeg',
    description: 'Basil is rich in antioxidants and has anti-inflammatory properties. It aids digestion and is commonly used in cooking for its aromatic flavor.',
  },
  {
    name: 'Mint',
    scientificName: 'Mentha',
    uses: 'Digestion, breath freshener, antioxidant',
    image: '/images/mint.jpg',
    description: 'Mint is widely used for its refreshing taste and aroma. It helps in digestion, freshens breath, and has antioxidant properties.',
  },
  {
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    uses: 'Skin care, digestion, immune support',
    image: '/images/alovera.jpg', // Replace with actual image paths
    description: 'Aloe Vera is known for its soothing and healing properties for the skin. It can be used to treat burns, cuts, and dry skin. Additionally, it supports digestion and boosts the immune system.',
  },
  {
    name: 'Basil',
    scientificName: 'Ocimum basilicum',
    uses: 'Anti-inflammatory, antioxidant, digestive aid',
    image: '/images/basil.jpeg',
    description: 'Basil is rich in antioxidants and has anti-inflammatory properties. It aids digestion and is commonly used in cooking for its aromatic flavor.',
  },
  {
    name: 'Mint',
    scientificName: 'Mentha',
    uses: 'Digestion, breath freshener, antioxidant',
    image: '/images/mint.jpg',
    description: 'Mint is widely used for its refreshing taste and aroma. It helps in digestion, freshens breath, and has antioxidant properties.',
  },
  {
    name: 'Basil',
    scientificName: 'Ocimum basilicum',
    uses: 'Anti-inflammatory, antioxidant, digestive aid',
    image: '/images/basil.jpeg',
    description: 'Basil is rich in antioxidants and has anti-inflammatory properties. It aids digestion and is commonly used in cooking for its aromatic flavor.',
  },
  {
    name: 'Mint',
    scientificName: 'Mentha',
    uses: 'Digestion, breath freshener, antioxidant',
    image: '/images/mint.jpg',
    description: 'Mint is widely used for its refreshing taste and aroma. It helps in digestion, freshens breath, and has antioxidant properties.',
  },
  // Add more plant data here
];

function PlantUses() {
  return (
    <div className="plant-uses">
      
      <ImageSlider />
      <div className="hero-image">
        <h1>Discover the Uses of Medicinal Plants</h1>
      </div>
      <div className="container">
        {plantUsesData.map((plant, index) => (
          <div className="plant-card" key={index}>
            <img src={plant.image} alt={plant.name} />
            <div className="plant-info">
              <h2>{plant.name}</h2>
              <h3>{plant.scientificName}</h3>
              <p><strong>Uses:</strong> {plant.uses}</p>
              <p>{plant.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantUses;
