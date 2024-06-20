import React from 'react';
import { FaHome, FaSearch, FaHeart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navItem}>
        <FaHome className={styles.icon} />
      </Link>
      <Link to="/search" className={styles.navItem}>
        <FaSearch className={styles.icon} />
      </Link>
      <Link to="/liked" className={styles.navItem}>
        <FaHeart className={styles.icon} />
      </Link>
      <Link to="/profile" className={styles.navItem}>
        <FaUser className={styles.icon} />
      </Link>
    </nav>
  );
};

export default Navbar;
