import React from "react";
import NavigationItem from "components/Navigation/NavigationItems/NavigationItem";
import styles from "./NavigationItems.module.scss";

const NavigationItems = () => {
  return (
    <ul className={styles.navigationItems}>
      <NavigationItem link="/">Burger Builder</NavigationItem>
      <NavigationItem link="/orders" exact>
        Orders
      </NavigationItem>
      <NavigationItem link="/auth">Authenticate</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
