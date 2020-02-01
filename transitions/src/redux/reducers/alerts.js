import { FIRE_ALERT, DISMISS_ALERT } from "redux/actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FIRE_ALERT:
      return [...state, action.payload];
    case DISMISS_ALERT:
      return state; // filter instead
    default:
      return state;
  }
};
