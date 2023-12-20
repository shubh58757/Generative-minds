// Home.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import Header from './layout/header';
import Footer from './layout/footer';
import './home.css'; 

function Home() {
  return (
    <div> 
      <Header />
      <div className="container">
        <div className='home-content'>
          <h1 className='home-text'>Build Your Own Blueprint</h1>
          <Link to="/generate" className='button-link'>
            <button className="generate-button rounded-box">GENERATE</button>
          </Link>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
