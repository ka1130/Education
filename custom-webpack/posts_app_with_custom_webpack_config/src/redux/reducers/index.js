import { combineReducers } from "redux";
import postsReducer from "redux/reducers/posts";
import usersReducer from "redux/reducers/users";

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer
});

export default rootReducer;
