import { FETCH_USERS_SUCCESS } from "actions/types";

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      console.log("ok");
      console.log(action);
      return state;
    default:
      return state;
  }
}
