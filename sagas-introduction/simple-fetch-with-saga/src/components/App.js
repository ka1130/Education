import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return <div>App</div>;
  }
}

const mapStateToProps = state => ({ users: state.users });

export default connect(
  mapStateToProps,
  { fetchUsers }
)(App);
