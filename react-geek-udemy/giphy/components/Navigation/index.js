import React from "react";
import { connect } from "react-redux";
// import { push } from 'react-router-redux'
// action creator function from a push action
import { push } from "connected-react-router";
import NavigationItem from "components/NavigationItem";

const pages = [{ path: "/", title: "Search" }];

const Navigation = ({ navigate, pages }) => {
  const items = pages.map(({ path, title }) => (
    <NavigationItem key={path} path={path} onClick={navigate}>
      {title}
    </NavigationItem>
  ));

  return <div>{items}</div>;
};

const mapDispatchToProps = dispatch => {
  return {
    navigate: path => dispatch(push(path))
  };
};

const mapStateToProps = () => {
  return { pages };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
