import { combineReducers } from "redux";
import burgerReducer from "redux/reducers/burgerReducer";

export default combineReducers({
  burger: burgerReducer
});
