import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.scss";

const NavigationItem = ({ children, link, exact }) => {
  return (
    <li className={styles.navigationItem}>
      <NavLink exact={exact} to={link} activeClassName={styles.active}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
