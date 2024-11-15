import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ loggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <NavLink to="/home"></NavLink>
        </div>
      </div>
      <div className="navbar-right">
        <NavLink to="/home" className="navbar-link" activeClassName="active">Home</NavLink>
        <NavLink to="/product" className="navbar-link" activeClassName="active">Product</NavLink>
        <NavLink to="/thankyou" className="navbar-link" activeClassName="active">Order</NavLink>
        <NavLink to="/treatments" className="navbar-link" activeClassName="active">Treatments</NavLink>
        <NavLink to="/appointment" className="navbar-link" activeClassName="active">Appointment</NavLink>
        <NavLink to="/about" className="navbar-link" activeClassName="active">About Us</NavLink>
        {loggedIn ? (
          <button
            onClick={onLogout}
            className="navbar-link navbar-logout"
            aria-label="Log out of account"
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login" className="navbar-link navbar-login" activeClassName="active">Login</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
