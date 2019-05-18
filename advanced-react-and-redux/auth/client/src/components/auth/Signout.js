import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

const Signout = () => {
  useEffect(() => {
    actions.signout();
  }, []);

  return <h3>You've been successfully signed out</h3>;
};
export default connect(
  null,
  actions
)(Signout);
