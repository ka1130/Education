import axios from "axios";
import * as actions from "redux/actions/types";

export const checkAuthTimeout = expTime => dispatch => {
  dispatch({ type: actions.AUTH_CHECK_TIMEOUT, expTime });
};

export const logout = () => ({ type: actions.LOGOUT_INIT });

export const auth = (email, password, isSignedUp) => dispatch => {
  dispatch({
    type: actions.AUTH_USER,
    payload: { email, password, isSignedUp }
  });
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
