import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchComments } from "actions";

class CommentList extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  renderButtons = comment => {
    if (this.props.auth) {
      return (
        <React.Fragment>
          <Link to={`/comments/edit/${comment.id}`} className="">
            Edit comment
          </Link>
          <Link to={`/comments/delete/${comment.id}`} className="">
            Delete comment
          </Link>
        </React.Fragment>
      );
    }
  };

  renderComments = () =>
    this.props.comments.map(comment => (
      <li key={comment.id}>
        <p>{comment.name}</p>
        {this.renderButtons(comment)}
      </li>
    ));

  render() {
    return (
      <div>
        <h4>Comment List</h4>
        <ul>{this.renderComments()}</ul>
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
