import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "actions/types";

export const fetchUsers = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

export const fetchUsersSuccess = foo => {
  console.log(foo);
  return {
    type: FETCH_USERS_SUCCESS
  };
};
