// src/components/NavBar/NavBar.jsx

import styles from "./navbar.module.css";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  //const menuList = ["Home", "About", "Contacts"];

  const menuList = [
    // New Line
    { name: "Home", path: "/" }, // New Line
    { name: "About", path: "/about" }, // New Line
    { name: "Contacts", path: "/contacts" }, // New Line
  ];

  return (
    <nav className={styles.navbarContainer}>
      <Logo />
      <ul className={styles.menuList}>
        {menuList.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              {item.name}
            </NavLink>{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
