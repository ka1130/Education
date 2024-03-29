import _ from "lodash";
import jsonPlaceholder from "apis/jsonPlaceholder";

// export const fetchPosts = () => {
//   return async (dispatch, getState) => {
//     const response = await jsonPlaceholder.get("posts");
//     console.log(getState()); // have a look at the whole store if you want
//     dispatch({ type: "FETCH_POSTS", payload: response.data });
//   };
// };
// LONGER AND MORE EXPLICIT VERSION ABOVE
// BELOW: define a fn that return a fn (the same thing)

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

/* MEMOIZATION TECHNIQUE */
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
/* END OF MEMOIZATION TECHNIQUE */
