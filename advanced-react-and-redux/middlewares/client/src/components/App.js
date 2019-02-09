import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "actions";

import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import NotAuthedWarning from "./NotAuthedWarning";
import LoginForm from "./LoginForm";

class App extends Component {
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/comments/new">Post A Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/comments/new" component={CommentBox} />
        <Route path="/not-authed" component={NotAuthedWarning} />
        <Route path="/login" component={LoginForm} />
        <Route exact path="/" component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  actions
)(App);
