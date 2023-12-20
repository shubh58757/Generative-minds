// Generate.js

import React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import './generate.css';
import Canvas from './Canvas'; // Adjust the import path accordingly

export default function Generate() {
  return (
    <div>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 p-0">
            {/* Static Sidebar */}
            <div className="sidebar">
              <h5>INSTRUCTIONS</h5>
              <ul>
                <li>Instruction 1</li>
                <li>Instruction 2</li>
                <li>Instruction 3</li>
                {/* Add more list items as needed */}
              </ul>
            </div>
          </div>

          <div className="col-md-9">
          <button className="generate-button rounded-box">GENERATE</button>
            <Canvas />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
