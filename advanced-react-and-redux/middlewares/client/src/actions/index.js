import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from "actions/types";

export const saveComment = comment => async dispatch => {
  const response = await axios.post("http://localhost:3001/comments", {
    title: comment
  });
  dispatch({ type: SAVE_COMMENT, payload: response.data });
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
