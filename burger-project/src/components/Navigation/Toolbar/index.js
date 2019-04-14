import React from "react";
import Logo from "components/Logo";
import NavigationItems from "components/Navigation/NavigationItems";
import styles from "./Toolbar.module.scss";

const Toolbar = () => {
  return (
    <header className={styles.toolbar}>
      <div>MENU</div>
      <div className={styles.logo}>
        <Logo />
      </div>
      <NavigationItems />
    </header>
  );
};

export default Toolbar;
