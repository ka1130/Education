import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "actions";

import CommentCreate from "components/comments/CommentCreate";
import CommentList from "components/comments/CommentList";
import CommentEdit from "components/comments/CommentEdit";
import CommentShow from "components/comments/CommentShow";
import CommentDelete from "components/comments/CommentDelete";
import NotAuthedWarning from "./NotAuthedWarning";
import LoginForm from "./LoginForm";

class App extends Component {
  renderHeader() {
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
      <div className="ui container">
        {this.renderHeader()}
        <Route path="/comments/new" component={CommentCreate} />
        <Route path="/comments/delete/:id" component={CommentDelete} />
        <Route path="/comments/edit/:id" component={CommentEdit} />
        <Route path="/comments/:id" component={CommentShow} />
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
