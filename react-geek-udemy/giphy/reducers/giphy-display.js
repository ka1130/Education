import { SHOW_GIPHY, HIDE_GIPHY } from "actions/types";

const initialState = {
  giphy: null,
  isShown: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_GIPHY:
      return { ...state, giphy: action.payload, isShown: true };
    case HIDE_GIPHY:
      return { ...state, giphy: null, isShown: false };
    default:
      return state;
  }
};
