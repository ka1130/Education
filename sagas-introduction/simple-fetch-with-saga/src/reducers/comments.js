import { FETCH_COMMENTS_SUCCESS } from "actions/types";

export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
