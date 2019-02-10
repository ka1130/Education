import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "actions";

import CommentCreate from "components/comments/CommentCreate";
import CommentList from "components/comments/CommentList";
import CommentEdit from "components/comments/CommentEdit";
import CommentShow from "components/comments/CommentShow";
import CommentDelete from "components/comments/CommentDelete";
import Header from "components/Header";
import NotAuthedWarning from "./NotAuthedWarning";
import LoginForm from "./LoginForm";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Header />
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
