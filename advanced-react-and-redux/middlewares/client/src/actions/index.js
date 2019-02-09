import axios from "axios";
import history from "../history";
import {
  CREATE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  FETCH_COMMENTS,
  CHANGE_AUTH
} from "actions/types";

export const createComment = comment => async dispatch => {
  const response = await axios.post("http://localhost:3001/comments", {
    name: comment
  });
  dispatch({ type: CREATE_COMMENT, payload: response.data });
  history.push("/");
};

export const editComment = (id, formValues) => async dispatch => {
  const response = await axios.patch(
    `http://localhost:3001/comments/${id}`,
    formValues
  );
  dispatch({ type: EDIT_COMMENT, payload: response.data });
  history.push("/");
};

export const deleteComment = id => async dispatch => {
  const response = await axios.delete(`http://localhost:3001/comments/${id}`);
  dispatch({ type: DELETE_COMMENT, payload: id });
  history.push("/");
};

export const fetchComments = () => async dispatch => {
  const response = await axios.get("http://localhost:3001/comments");
  dispatch({ type: FETCH_COMMENTS, payload: response.data });
};

export const changeAuth = isLoggedIn => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
};
