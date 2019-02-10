import React, { Component } from "react";
import { Link } from "react-router-dom";
import faker from "faker";

class CommentItem extends Component {
  renderButtons = comment => {
    if (this.props.auth) {
      return (
        <React.Fragment>
          <Link
            to={`/comments/edit/${comment.id}`}
            className="ui mini basic button"
          >
            Edit
          </Link>
          <Link
            to={`/comments/delete/${comment.id}`}
            className="ui mini button"
          >
            Delete
          </Link>
        </React.Fragment>
      );
    }
  };

  render() {
    const { comment } = this.props;
    return (
      <div className="item">
        <div className="right floated content">
          {this.renderButtons(comment)}
        </div>
        <img className="ui avatar image" src={faker.image.avatar()} alt="" />
        <div className="content">
          <p className="header">{comment.name}</p>
          <div className="description">{comment.body}</div>
          <Link to={`/comments/${comment.id}`}>See comment</Link>
        </div>
      </div>
    );
  }
}

export default CommentItem;
