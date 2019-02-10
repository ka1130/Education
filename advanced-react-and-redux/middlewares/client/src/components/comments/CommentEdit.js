import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments, editComment } from "actions";
// add fetch single comment action and replace the current fetching of all comments
import CommentForm from "components/comments/CommentForm";

class CommentEdit extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  handleSubmit = formValues => {
    const { id } = this.props.match.params;
    this.props.editComment(formValues, id);
  };

  render() {
    console.log(this.props.comment);
    const { comment } = this.props;
    return (
      <div>
        <h3>Edit comment with a title....</h3>
        <CommentForm comment={comment} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //reselect here? rewatch the chapter from Udemy?
  return {
    comment: state.comments.find(
      comment => comment.id === parseInt(ownProps.match.params.id)
    )
  };
};

export default connect(
  mapStateToProps,
  { fetchComments, editComment }
)(CommentEdit);
