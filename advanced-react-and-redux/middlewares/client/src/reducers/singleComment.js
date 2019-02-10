import { FETCH_SINGLE_COMMENT } from "actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SINGLE_COMMENT:
      return action.payload;
    default:
      return state;
  }
}
