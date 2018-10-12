import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    // now that this.props.posts is an object instead of an array
    // we cannot use the JS .map fn, but lodash's .map function can do that
    // we pass it an object and a function that will be the mapping function
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}
/*
 Whenever we want to consume anything from the application of our state
we need to define mapStateToProps fn
*/

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

/*
this is a shortcut for writing a mapDispatchToProps function with only one argument
so we still have access to this.props.fetchPosts() fn
*/
