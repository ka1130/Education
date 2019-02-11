import React from "react";
import { connect } from "react-redux";
import { getUsersRequest } from "actions/users";
import UsersList from "components/UsersList";

class App extends React.Component {
  componentDidMount() {
    this.props.getUsersRequest();
    console.log(this.props);
  }

  render() {
    const { users } = this.props;
    return (
      <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
        <UsersList users={users.items} />
      </div>
    );
  }
}

export default connect(
  ({ users }) => ({ users }),
  { getUsersRequest }
)(App);
