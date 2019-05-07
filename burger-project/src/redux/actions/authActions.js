import * as actions from "redux/actions/types";

export const checkAuthTimeout = expTime => ({
  type: actions.AUTH_CHECK_TIMEOUT,
  expTime
});

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

export const checkAuthStatus = () => ({ type: actions.AUTH_CHECK_STATE });
