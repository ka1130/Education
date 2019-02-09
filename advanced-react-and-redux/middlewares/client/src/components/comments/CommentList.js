import React, { Component } from "react";
import faker from "faker";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchComments } from "actions";
import CommentItem from "components/comments/CommentItem";

class CommentList extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  renderComments = () =>
    this.props.comments.map(comment => (
      <CommentItem comment={comment} key={comment.id} auth={this.props.auth} />
    ));

  render() {
    return (
      <div className="ui segment">
        <h4>Comment List</h4>
        <div className="ui relaxed divided list">{this.renderComments()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { fetchComments: fetchComments }
)(CommentList);
