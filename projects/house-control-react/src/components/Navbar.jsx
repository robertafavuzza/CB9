import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaSearch, FaCog } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar-container">
      <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
        <FaHome />
      </Link>
      <Link to="/search" className={`nav-item ${location.pathname === '/search' ? 'active' : ''}`}>
        <FaSearch />
      </Link>
      <Link to="/profile" className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}>
        <FaUser />
      </Link>
      <Link to="/settings" className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`}>
        <FaCog />
      </Link>
    </nav>
  );
};

export default Navbar;
