import axios from "axios";
import * as actions from "redux/actions/types";

const authURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${
  process.env.REACT_APP_API_KEY
}`;
// https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
// API key: https://console.firebase.google.com/u/0/project/burger-udemy-92254/settings/general/

export const auth = (email, password) => async dispatch => {
  console.log(authURL);
  dispatch({ type: actions.AUTH_INIT });
  try {
    const authData = { email, password, returnSecureToken: true };
    const response = await axios.post(authURL, authData);
    console.log(response);
    dispatch({ type: actions.AUTH_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: actions.AUTH_FAILED, payload: error });
  }
};
