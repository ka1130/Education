import React, { useState } from "react";
import Aux from "hoc/Aux";
import Toolbar from "components/Navigation/Toolbar";
import SideDrawer from "components/Navigation/SideDrawer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const [sideDrawerVisible, setSideDrawerVisible] = useState(false);

  const handleSideDrawerClose = () => setSideDrawerVisible(false);

  const handleSideDrawerOpen = () => setSideDrawerVisible(true);

  // const handleSideDrawerOpen = () => setSideDrawerVisible(true);

  return (
    <Aux>
      <Toolbar onSideDrawerOpen={handleSideDrawerOpen} />
      <SideDrawer visible={sideDrawerVisible} onClose={handleSideDrawerClose} />
      <main className={styles.content}>{children}</main>
    </Aux>
  );
};

export default Layout;
