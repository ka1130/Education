import React from "react";
import Logo from "components/Logo";
import styles from "./Toolbar.module.scss";

const Toolbar = () => {
  return (
    <header className={styles.toolbar}>
      <div>MENU</div>
      <Logo />
      <nav />
    </header>
  );
};

export default Toolbar;
