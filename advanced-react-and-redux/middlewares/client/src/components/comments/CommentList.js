import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv4 from "uuid/v1";
import { fetchComments } from "actions";
import CommentItem from "components/comments/CommentItem";

class CommentList extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  renderComments = () =>
    this.props.comments.map(comment => (
      <CommentItem comment={comment} key={uuidv4()} auth={this.props.auth} />
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
