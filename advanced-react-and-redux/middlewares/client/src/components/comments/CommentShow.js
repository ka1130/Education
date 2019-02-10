import React, { Component } from "react";
import { connect } from "react-redux";
import faker from "faker";
import { fetchSingleComment } from "actions";

class CommentShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSingleComment(id);
  }

  render() {
    const comment = this.props.singleComment;
    return (
      <div className="ui comments">
        <div className="comment">
          <span className="avatar">
            <img src={faker.image.avatar()} alt="" />
          </span>
          <div className="content">
            <span className="author">{comment.name}</span>
            <div className="metadata">
              <div className="date">{comment.email}</div>
            </div>
            <div className="text">
              <p>{comment.body}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singleComment: state.singleComment
});

export default connect(
  mapStateToProps,
  { fetchSingleComment }
)(CommentShow);
