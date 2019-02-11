import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsersList() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
  }

  render() {
    return <div>{this.renderUsersList()}</div>;
  }
}

const mapStateToProps = state => ({ users: state.users });

export default connect(
  mapStateToProps,
  { fetchUsers }
)(App);
