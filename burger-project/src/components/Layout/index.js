import React, { useState } from "react";
import Aux from "hoc/Aux";
import Toolbar from "components/Navigation/Toolbar";
import SideDrawer from "components/Navigation/SideDrawer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const [sideDrawerVisible, setSideDrawerVisible] = useState(false);

  const handleSideDrawerToggle = () => setSideDrawerVisible(!sideDrawerVisible);

  return (
    <Aux>
      <Toolbar onSideDrawerToggle={handleSideDrawerToggle} />
      <SideDrawer
        visible={sideDrawerVisible}
        onClose={handleSideDrawerToggle}
      />
      <main className={styles.content}>{children}</main>
    </Aux>
  );
};

export default Layout;
