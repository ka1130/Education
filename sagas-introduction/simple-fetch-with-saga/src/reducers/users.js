import { FETCH_USERS_SUCCESS } from "actions/types";

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
