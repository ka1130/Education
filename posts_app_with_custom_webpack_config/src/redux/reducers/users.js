import { FETCH_USER } from "redux/actions/constants";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};
