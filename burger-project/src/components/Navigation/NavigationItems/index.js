import React from "react";
import { connect } from "react-redux";
import NavigationItem from "components/Navigation/NavigationItems/NavigationItem";
import styles from "./NavigationItems.module.scss";

export const NavigationItems = ({ isLoggedIn }) => {
  const renderAuthBtn = () => {
    if (isLoggedIn) {
      return <NavigationItem link="/logout">Logout</NavigationItem>;
    } else {
      return <NavigationItem link="/auth">Authenticate</NavigationItem>;
    }
  };

  return (
    <ul className={styles.navigationItems}>
      <NavigationItem link="/">Burger Builder</NavigationItem>
      <NavigationItem link="/orders" exact>
        Orders
      </NavigationItem>
      {renderAuthBtn()}
    </ul>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.token !== null
});

export default connect(mapStateToProps)(NavigationItems);
