import comments from "apis/comments";
import history from "../history";
import {
  CREATE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  FETCH_COMMENTS,
  FETCH_SINGLE_COMMENT,
  SIGN_IN,
  SIGN_OUT
} from "actions/types";

export const createComment = comment => async dispatch => {
  const response = await comments.post("/comments", comment);
  dispatch({ type: CREATE_COMMENT, payload: response.data });
  history.push("/");
};

export const editComment = (formValues, id) => async dispatch => {
  const response = await comments.patch(`/comments/${id}`, formValues);
  dispatch({ type: EDIT_COMMENT, payload: response.data });
  history.push("/");
};

export const deleteComment = id => async dispatch => {
  await comments.delete(`/comments/${id}`);
  dispatch({ type: DELETE_COMMENT, payload: id });
  history.push("/");
};

export const fetchSingleComment = id => async dispatch => {
  const response = await comments.get(`/comments/${id}`);
  dispatch({ type: FETCH_SINGLE_COMMENT, payload: response.data });
};

export const fetchComments = () => async dispatch => {
  const response = await comments.get("/comments");
  dispatch({ type: FETCH_COMMENTS, payload: response.data });
};

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
