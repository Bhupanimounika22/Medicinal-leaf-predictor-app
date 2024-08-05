// src/components/Footer.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <p>&copy; 2024 Leaf & Plant Predictor. All Rights Reserved.</p>
        <div>
          <a href="/terms" className="text-white mr-3">Terms of Service</a>
          <a href="/privacy" className="text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
