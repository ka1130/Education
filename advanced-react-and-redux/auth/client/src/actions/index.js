import axios from "axios";
import { AUTH_USER } from "actions/types";

export const signup = formProps => dispatch => {
  axios.post("http://localhost:3090/signup", formProps);
  // dispatch({ type: AUTH_USER, payload: response });
};
