import React from "react";
// import jsonPlaceholder from 'apis/jsonPlaceholder';
import { connect } from "react-redux";
import { fetchUser } from "actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;
    if (!user) return null;
    console.log(user);
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id === ownProps.userId)
});

export default connect(
  mapStateToProps,
  { fetchUser: fetchUser }
)(UserHeader);
