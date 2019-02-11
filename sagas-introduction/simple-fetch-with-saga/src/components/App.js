import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "actions";

import CommentsList from "components/CommentsList";

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsersList() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
  }

  render() {
    return (
      <div>
        <h3>Users</h3>
        <ul>{this.renderUsersList()}</ul>
        <CommentsList />
      </div>
    );
  }
}

const mapStateToProps = state => ({ users: state.users });

export default connect(
  mapStateToProps,
  { fetchUsers }
)(App);
