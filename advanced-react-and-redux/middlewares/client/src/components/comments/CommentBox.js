import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

import requireAuth from "components/requireAuth";

class CommentBox extends Component {
  state = { comment: "" };

  handleChange = e => {
    this.setState({ comment: e.target.value });
    // enable other fields like body and email
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit comment</button>
          </div>
        </form>
      </>
    );
  }
}

export default connect(
  null,
  actions
)(requireAuth(CommentBox));
