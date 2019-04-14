import React from "react";
import Aux from "hoc/Aux";
import Toolbar from "components/Navigation/Toolbar";
import SideDrawer from "components/Navigation/SideDrawer";
import styles from "./Layout.module.css";

const Layout = props => {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      <main className={styles.content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
