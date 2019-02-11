import { FETCH_USERS_REQUEST } from "actions/types";

export const fetchUsers = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};
