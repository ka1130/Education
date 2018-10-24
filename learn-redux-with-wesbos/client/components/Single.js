import React from 'react';
import Photo from './Photo';

// import comments

const Single = props => {
  // we need the index of the post to get us the actual post
  // we have the post code/id in the url so we'll use that
  const i = props.posts.findIndex(post => post.code === props.params.postId);
  const post = props.posts[i];
  console.log(i, post);
  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props} />
    </div>
  );
};

export default Single;