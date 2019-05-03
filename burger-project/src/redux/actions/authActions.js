import axios from "axios";
import * as actions from "redux/actions/types";

const signupURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${
  process.env.REACT_APP_API_KEY
}`;

const signinURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${
  process.env.REACT_APP_API_KEY
}`;
// https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
// API key: https://console.firebase.google.com/u/0/project/burger-udemy-92254/settings/general/

const checkAuthTimeout = expTime => dispatch => {
  setTimeout(() => {
    dispatch({ type: actions.LOGOUT });
  }, expTime * 1000);
};

export const logout = () => ({ type: actions.LOGOUT });

export const auth = (email, password, isSignedUp) => async dispatch => {
  dispatch({ type: actions.AUTH_INIT });
  try {
    const authData = { email, password, returnSecureToken: true };
    const authURL = isSignedUp ? signupURL : signinURL;
    const response = await axios.post(authURL, authData);
    dispatch({ type: actions.AUTH_SUCCESS, payload: response.data });
    dispatch(checkAuthTimeout(response.data.expiresIn));
  } catch (error) {
    dispatch({ type: actions.AUTH_FAILED, payload: error });
  }
};

export const setAuthRedirectPath = path => ({
  type: actions.SET_AUTH_REDIRECT_PATH,
  payload: path
});
