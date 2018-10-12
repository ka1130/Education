import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const ROOT_UTL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=1o2j3ewqasd98gRt4lP09';

export function fetchPosts() {
  const request = axios.get(`${ROOT_UTL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

// values object received from form submission
// callback is needed because we want to redirect only after a successfull call
// we will need to use promise
export function createPost(values, callback) {
  // we cannot just send tis values object like that at the moment because we don't have an id associated with it
  // our posts contains key-value pairs where id is a key and value is the post object
  const request = axios.post(`${ROOT_UTL}/posts${API_KEY}`, values)
    .then(() => callback());
  // url is a first parameter and object with values to send is the second one - a typical pattern

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_UTL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_UTL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}
