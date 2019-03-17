import _ from "lodash";
import { FETCH_POSTS, FETCH_USER } from "redux/actions/constants";
import jsonPlaceholder from "apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // // ^ find just uniq userIds keys on the posts arr
  // userIds.forEach(id => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value(); // to execute the chained functions
  // this chained fns do the same thing as the commented out lines above
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: FETCH_USER, payload: response.data });
};

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: FETCH_USER, payload: response.data });
// });
