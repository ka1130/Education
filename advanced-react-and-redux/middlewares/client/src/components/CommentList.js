import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments } from "actions";
import axios from "axios";

class CommentList extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  renderComments = () =>
    this.props.comments.map((comment, index) => <li key={index}>{comment}</li>);

  render() {
    console.log(this.props.comments);
    return (
      <div>
        <h4>Comment List</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ comments: state.comments });

export default connect(
  mapStateToProps,
  { fetchComments: fetchComments }
)(CommentList);
