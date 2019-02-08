import React from "react";
// import jsonPlaceholder from 'apis/jsonPlaceholder';
import { connect } from "react-redux";
import { fetchUser } from "actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    return <div>{this.props.user.name}</div>;
  }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps,
  { fetchUser: fetchUser }
)(UserHeader);
