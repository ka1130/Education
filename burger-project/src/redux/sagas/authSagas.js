import axios from "axios";
import { put, delay } from "redux-saga/effects";
import * as actionTypes from "redux/actions/types";
import * as actions from "redux/actions/authActions";

const signupURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${
  process.env.REACT_APP_API_KEY
}`;

const signinURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${
  process.env.REACT_APP_API_KEY
}`;

// https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
// API key: https://console.firebase.google.com/u/0/project/burger-udemy-92254/settings/general/

export function* logoutSaga(action) {
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("expirationTime");
  yield put({ type: actionTypes.LOGOUT });
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expTime * 1000);
  yield put({ type: actionTypes.LOGOUT });
}

export function* authSaga(action) {
  console.log(action);
  yield put({ type: actionTypes.AUTH_INIT });
  const { email, password } = action.payload;
  const authData = {
    email,
    password,
    returnSecureToken: true
  };
  const authURL = action.payload.isSignedUp ? signupURL : signinURL;
  try {
    const response = yield axios.post(authURL, authData);
    // wait for this promise to resolve or reject and then store wahtever we get back
    // in the response variable
    const { expiresIn } = response.data;
    const expirationTime = yield new Date(
      new Date().getTime() + expiresIn * 1000
    );
    yield localStorage.setItem("token", response.data.idToken);
    yield localStorage.setItem("expirationTime", expirationTime);
    // localStorage actions are synchronous so we don't really need the yield keyword here
    // but we can use it
    yield put({ type: actionTypes.AUTH_SUCCESS, payload: response.data });
    yield put(actions.checkAuthTimeout(expiresIn));
  } catch (error) {
    yield put({ type: actionTypes.AUTH_FAILED, payload: error });
  }
}
