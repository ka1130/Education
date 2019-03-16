import { combineReducers } from "redux";
import postsReducer from "redux/reducers/posts";

const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;
