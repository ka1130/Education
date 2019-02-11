import { combineReducers } from "redux";
import userReducer from "reducers/users";

export default combineReducers({ users: userReducer });
