import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import PlantUsesPage from './components/PlantUsesPage';
import PredictionPage from './components/PredictionPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plant-uses" element={<PlantUsesPage />} />
          <Route path="/predict" element={<PredictionPage />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
