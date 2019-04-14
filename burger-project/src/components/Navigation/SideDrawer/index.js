import React from "react";
import Backdrop from "components/UI/Backdrop";
import Logo from "components/Logo";
import NavigationItems from "components/Navigation/NavigationItems";
import styles from "./SideDrawer.module.scss";

const SideDrawer = ({ visible, onClose }) => {
  return (
    <>
      <Backdrop visible={visible} onClick={onClose} />
      <div
        className={`${styles.sideDrawer} ${
          visible ? styles.open : styles.closed
        }`}
      >
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.desktopOnly}>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};
export default SideDrawer;
