import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Header';
import "../CSS/Home.css";

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <header className='home-header'>
        <h1>Welcome to VibeTrip</h1>
        <p>Find travel buddies and plan your next adventure together!</p>
        <div className='btn-primary'>
          <Link to="/login" className="btn">Get Started</Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
