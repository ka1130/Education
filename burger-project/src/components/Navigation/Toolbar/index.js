import React from "react";
import DrawerToggle from "components/Navigation/SideDrawer/DrawerToggle";
import Logo from "components/Logo";
import NavigationItems from "components/Navigation/NavigationItems";
import styles from "./Toolbar.module.scss";

const Toolbar = ({ onSideDrawerToggle }) => {
  return (
    <header className={styles.toolbar}>
      <DrawerToggle onSideDrawerToggle={onSideDrawerToggle} />
      <div className={styles.logo}>
        <Logo />
      </div>
      <NavigationItems />
    </header>
  );
};

export default Toolbar;
