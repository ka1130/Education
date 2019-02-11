import { FETCH_USERS_REQUEST, FETCH_COMMENTS_REQUEST } from "actions/types";

export const fetchUsers = () => ({ type: FETCH_USERS_REQUEST });

export const fetchComments = () => ({ type: FETCH_COMMENTS_REQUEST });
