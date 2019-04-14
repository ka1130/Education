import React from "react";
import Logo from "components/Logo";
import NavigationItems from "components/Navigation/NavigationItems";
import styles from "./SideDrawer.module.scss";

const SideDrawer = () => {
  return (
    <div className={styles.sideDrawer}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.desktopOnly}>
        <NavigationItems />
      </nav>
    </div>
  );
};
export default SideDrawer;
