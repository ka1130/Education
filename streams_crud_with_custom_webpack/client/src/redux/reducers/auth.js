import * as actions from "redux/actions/constants";

const initialState = {
  isSignedIn: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGN_IN:
      return { ...state, isSignedIn: true };
    case actions.SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
