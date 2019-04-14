import React from "react";
import DrawerToggle from "components/Navigation/SideDrawer/DrawerToggle";
import Logo from "components/Logo";
import NavigationItems from "components/Navigation/NavigationItems";
import styles from "./Toolbar.module.scss";

const Toolbar = ({ onSideDrawerOpen }) => {
  return (
    <header className={styles.toolbar}>
      <DrawerToggle onSideDrawerOpen={onSideDrawerOpen} />
      <div className={styles.logo}>
        <Logo />
      </div>
      <NavigationItems />
    </header>
  );
};

export default Toolbar;
