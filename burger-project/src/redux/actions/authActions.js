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

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");
  return { type: actions.LOGOUT };
};

export const auth = (email, password, isSignedUp) => async dispatch => {
  dispatch({ type: actions.AUTH_INIT });
  try {
    const authData = { email, password, returnSecureToken: true };
    const authURL = isSignedUp ? signupURL : signinURL;
    const response = await axios.post(authURL, authData);
    const { expiresIn } = response.data;
    const expirationTime = new Date(new Date().getTime() + expiresIn * 1000);
    localStorage.setItem("token", response.data.idToken);
    localStorage.setItem("expirationTime", expirationTime);
    dispatch({ type: actions.AUTH_SUCCESS, payload: response.data });
    dispatch(checkAuthTimeout(expiresIn));
  } catch (error) {
    dispatch({ type: actions.AUTH_FAILED, payload: error });
  }
};

export const setAuthRedirectPath = path => ({
  type: actions.SET_AUTH_REDIRECT_PATH,
  payload: path
});

export const checkAuthStatus = () => async dispatch => {
  const token = localStorage.getItem("token");
  const userDataURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=${
    process.env.REACT_APP_API_KEY
  }`;
  // https://firebase.google.com/docs/reference/rest/auth#section-get-account-info
  if (!token) {
    dispatch(logout());
  } else {
    const expirationTime = new Date(localStorage.getItem("expirationTime"));
    if (expirationTime <= new Date()) {
      dispatch(logout());
    } else {
      try {
        const response = await axios.post(userDataURL, { idToken: token });
        const userID = response.data.users[0].localId;
        console.log(response);
        // dispatch({
        //   type: actions.AUTH_SUCCESS,
        //   payload: { localId: userID, idToken: token }
        // });
        // dispatch(
        //   checkAuthStatus(
        //     expirationTime.getTime() - new Date().getTime() / 1000
        //   )
        // );
      } catch (error) {
        dispatch({ type: actions.AUTH_FAILED, payload: error });
      }
    }
  }
};
