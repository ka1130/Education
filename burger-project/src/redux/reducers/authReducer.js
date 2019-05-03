import { combineReducers } from "redux";
import * as actions from "redux/actions/types";

const token = (state = null, action) => {
  switch (action.type) {
    case actions.AUTH_SUCCESS:
      return action.payload.idToken;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state;
  }
};

const userID = (state = null, action) => {
  switch (action.type) {
    case actions.AUTH_SUCCESS:
      return action.payload.localId;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case actions.AUTH_FAILED:
      const errorMessage = action.payload.response.data.error.message;
      return errorMessage;
    case actions.AUTH_SUCCESS:
    case actions.LOGOUT:
      return false;
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case actions.AUTH_INIT:
      return true;
    case actions.AUTH_SUCCESS:
    case actions.AUTH_FAILED:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  token,
  userID,
  error,
  loading
});
