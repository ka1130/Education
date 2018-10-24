import React from 'react';

import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
  // we need the index of the post to get us the actual post
  // we have the post code/id in the url so we'll use that
  const { postId } = props.params;
  const i = props.posts.findIndex((post) => post.code === postId);
  const post = props.posts[i];
  const postComments = props.comments[postId] || [];
  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props} />
      <Comments postComments={postComments} />
    </div>
  );
};

export default Single;