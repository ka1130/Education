import { FETCH_USERS_REQUEST } from "actions/types";

export const fetchUsers = () => {
  console.log("foo");
  return {
    type: FETCH_USERS_REQUEST
  };
};
