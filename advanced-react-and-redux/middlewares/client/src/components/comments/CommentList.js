import React, { Component } from "react";
import faker from "faker";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchComments } from "actions";
import CommentItem from "components/comments/CommentItem";

class CommentList extends Component {
  componentDidMount() {
    this.props.fetchComments();
    console.log(faker.image.avatar());
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
      <CommentItem comment={comment} key={comment.id} />
      // <div key={comment.id} className="item">
      //   <p>{comment.name}</p>

      //   {this.renderButtons(comment)}
      // </div>
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
