import React from "react";
import { connect } from "react-redux";
import { getUsersRequest } from "actions/users";

class App extends React.Component {
  componentDidMount() {
    this.props.getUsersRequest();
  }

  render() {
    return <div>App</div>;
  }
}

export default connect(
  null,
  { getUsersRequest }
)(App);
