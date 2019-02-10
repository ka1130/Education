import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeAuth } from "actions";

class Header extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button
          className="ui button right floated item"
          onClick={() => this.props.changeAuth(false)}
        >
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          className="ui button right floated item"
          onClick={() => this.props.changeAuth(true)}
        >
          Sign In
        </button>
      );
    }
  }

  render() {
    return (
      <div className="ui text menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/comments/new" className="item">
          Post a comment
        </Link>
        {this.renderButton()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  mapStateToProps,
  { changeAuth }
)(Header);
