import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "../CSS/Header.css";



const Navbar = () => {
  // const history = useNavigate();

  // const handleLoginClick = () => {
  //   history.push('/login');
  // };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='nav'>
      <div className='nav-logo'>VibeTrip</div>
      <div className='menu-icon' onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/find-match">Find Your Match</a></li>
        <li><a href="/plan-trip">Plan Trip</a></li>
      </ul> 
      <div className="header-buttons">
        <Link to="/login" className="btn">Log In</Link>
      </div>
    </nav>
  );
}

export default Navbar;
{/* <nav>
        <input type="text" placeholder="Search..." className="p-2 rounded" />
        <Link to="/discover" className="ml-4">Discover</Link>
        <Link to="/profile" className="ml-4">Login</Link>
        <Link to="/messages" className="ml-4">Messages</Link>
      </nav> */}
