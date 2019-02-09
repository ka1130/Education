import _ from "lodash";
import {
  CREATE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  FETCH_COMMENTS
} from "actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return [...action.payload];
    case CREATE_COMMENT:
      return [...state, action.payload];
    case EDIT_COMMENT:
      return [...state, action.payload];
    //check if correct^
    case DELETE_COMMENT:
      return _.omit(state, action.payload);
    //check if correct^
    default:
      return state;
  }
}
