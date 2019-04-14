import React from "react";
import styles from "./DrawerToggle.module.scss";

const DrawerToggle = ({ onSideDrawerToggle }) => {
  return (
    <div className={styles.drawerToggle} onClick={onSideDrawerToggle}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default DrawerToggle;
