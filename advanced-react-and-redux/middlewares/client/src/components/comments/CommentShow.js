import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleComment } from "actions";

class CommentShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSingleComment(id);
  }

  render() {
    console.log(this.props.singleComment);
    return <div>CommentShow</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  singleComment: state.singleComment
  // comment: state.comments.find(
  //   comment => comment.id === parseInt(ownProps.match.params.id)
  // )
});

export default connect(
  mapStateToProps,
  { fetchSingleComment }
)(CommentShow);
