import * as actions from "redux/actions/types";

export const auth = (email, password) => dispatch => {
  dispatch({ type: actions.AUTH_INIT });
  // try {
  //   const authData = await 5;
  //   dispatch({ type: actions.AUTH_SUCCESS, payload: authData });
  // } catch (error) {
  //   dispatch({ type: actions.AUTH_FAILED, payload: error });
  // }
};
