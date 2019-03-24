import { FETCH_POSTS } from "redux/actions/constants";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
};
