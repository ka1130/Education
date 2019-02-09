import React from "react";
import faker from "faker";

const CommentItem = ({ comment }) => {
  return (
    <div className="item">
      <img className="ui avatar image" src={faker.image.avatar()} alt="" />
      <div className="content">
        <p className="header">{faker.name.findName()}</p>
        <div className="description">{comment.name}</div>
      </div>
    </div>
  );
};

export default CommentItem;
