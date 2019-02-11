import { combineReducers } from "redux";
import usersReducer from "reducers/users";
import commentsReducer from "reducers/comments";

export default combineReducers({
  users: usersReducer,
  comments: commentsReducer
});
