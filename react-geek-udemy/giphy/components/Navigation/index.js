import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import NavigationItem from "components/NavigationItem";
import styles from "./Navigation.css";

const pages = [
  { path: "/", title: "Search" },
  { path: "/trending", title: "Trending" },
  { path: "/random", title: "Random" }
];

const Navigation = ({ navigate, pages, currentPath }) => {
  const items = pages.map(({ path, title }) => (
    <NavigationItem
      key={path}
      path={path}
      onClick={navigate}
      isCurrent={path === currentPath}
    >
      {title}
    </NavigationItem>
  ));

  return <div className={styles.container}>{items}</div>;
};

const mapDispatchToProps = dispatch => {
  return {
    navigate: path => dispatch(push(path))
  };
};

const mapStateToProps = state => {
  return { pages, currentPath: state.router.location.pathname };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
