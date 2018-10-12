import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    // here we want to get the post's id, we have it in our url
    // params is an object that lists all the different wildcart tokens that exist inside of the url
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    // this.props === ownProps
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  /*
    we only care about this post property out of the state argument
    but we care about a single post, not the whole posts prop on the state
    a second argument to the mapStateToProps fn (first is the state)
    is ownProps => it's the props object that is given to this component => this.props === ownProps
    so we cab return only the single post that we care about
  */
  return { post: posts[ownProps.match.params.id] };
  // now our component only receives the specific post it cares about
};

export default connect(mapStateToProps, { fetchPost, deletePost } )(PostsShow);
