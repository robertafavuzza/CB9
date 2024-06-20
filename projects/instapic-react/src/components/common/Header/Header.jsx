import React from 'react';
import { FaPlus, FaBell, FaCommentDots, FaBookmark, FaBars } from 'react-icons/fa';
import styles from './Header.module.scss';

const Header = ({ handleSidebarToggle }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>InstaPic</div>
      <div className={styles.icons}>
        <FaPlus className={styles.icon} />
        <FaBell className={styles.icon} />
        <FaCommentDots className={styles.icon} />
        <FaBookmark className={styles.icon} />
        <FaBars className={styles.icon} onClick={handleSidebarToggle} />
      </div>
    </header>
  );
};

export default Header;