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
    case DELETE_COMMENT:
      return [...state].filter(elem => elem.id !== action.payload);
    default:
      return state;
  }
}
