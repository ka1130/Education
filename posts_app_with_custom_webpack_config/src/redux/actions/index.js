import jsonPlaceholder from "apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  console.log("hello from thunk");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
