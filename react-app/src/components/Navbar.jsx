// src/components/Navbar.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container">
        <Link className="navbar-brand" to="/">Leaf & Plant Predictor</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
             
            <li className="nav-item ">
              <Link className="nav-link" to="/plant-uses">Plant Uses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/predict">Predict</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
