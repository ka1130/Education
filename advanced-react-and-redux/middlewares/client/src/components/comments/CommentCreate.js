import React, { Component } from "react";
import { connect } from "react-redux";
import { createComment } from "actions";

import CommentForm from "components/comments/CommentForm";
import requireAuth from "components/requireAuth";

class CommentCreate extends Component {
  handleSubmit = formValues => {
    this.props.createComment(formValues);
  };

  render() {
    return <CommentForm onSubmit={this.handleSubmit} />;
  }
}

export default connect(
  null,
  { createComment }
)(requireAuth(CommentCreate));
