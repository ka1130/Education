import React from "react";
import styles from "./NavigationItem.module.scss";

const NavigationItem = ({ children, active, link }) => {
  return (
    <li className={styles.navigationItem}>
      <a href={link} className={active ? styles.active : ""}>
        {children}
      </a>
    </li>
  );
};

export default NavigationItem;
