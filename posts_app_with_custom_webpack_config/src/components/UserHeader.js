import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "redux/actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;
    if (!user) return null;
    return <div className="header">hh{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id === ownProps.userId)
});

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
