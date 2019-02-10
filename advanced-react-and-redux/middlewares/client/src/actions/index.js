import comments from "apis/comments";
import history from "../history";
import {
  CREATE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  FETCH_COMMENTS,
  CHANGE_AUTH
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

export const fetchComments = () => async dispatch => {
  const response = await comments.get("/comments");
  dispatch({ type: FETCH_COMMENTS, payload: response.data });
};

export const changeAuth = isLoggedIn => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
};
