import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('home'); 

  const handleClick = (page) => {
    setActive(page);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo"></div>
      </div>
      <div className="navbar-right">
        <Link
          to="/home" 
          className={`navbar-link ${active === 'home' ? 'active' : ''}`}
          onClick={() => handleClick('home')}
        >
          Home
        </Link>
        <Link
          to="/treatments"
          className={`navbar-link ${active === 'treatments' ? 'active' : ''}`}
          onClick={() => handleClick('treatments')}
        >
          Treatments
        </Link>
        <Link
          to="/appointment"
          className={`navbar-link ${active === 'appointment' ? 'active' : ''}`}
          onClick={() => handleClick('appointment')}
        >
          Appointment
        </Link>
        <Link
          to="/about"
          className={`navbar-link ${active === 'about' ? 'active' : ''}`}
          onClick={() => handleClick('about')}
        >
          About Us
        </Link>
        <Link
          to="/login"  
          className="navbar-link navbar-login"  
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
