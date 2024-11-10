// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ loggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <Link to="/home"></Link>
        </div>
      </div>
      <div className="navbar-right">
        <Link to="/home" className="navbar-link">Home</Link>
        <Link to="/treatments" className="navbar-link">Treatments</Link>
        <Link to="/appointment" className="navbar-link">Appointment</Link>
        <Link to="/about" className="navbar-link">About Us</Link>
        {loggedIn ? (
          <button
            onClick={onLogout}
            className="navbar-link navbar-logout"
            aria-label="Log out of account"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="navbar-link navbar-login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
