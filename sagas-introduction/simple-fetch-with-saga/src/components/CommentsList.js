import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments } from "actions";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  renderComments() {
    const comments = this.props.comments.slice(0, 10);
    return comments.map(comment => <li key={comment.id}>{comment.name}</li>);
  }

  render() {
    return (
      <div>
        <h3>UsersList</h3>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ comments: state.comments });

export default connect(
  mapStateToProps,
  { fetchComments }
)(UsersList);
