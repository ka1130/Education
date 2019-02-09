import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/not-authed");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
      /* make sure we pass all the props */
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth
  });

  return connect(mapStateToProps)(ComposedComponent);
};
