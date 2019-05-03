import { combineReducers } from "redux";
import authReducer from "redux/reducers/authReducer";
import burgerReducer from "redux/reducers/burgerReducer";
import ordersReducer from "redux/reducers/ordersReducer";

export default combineReducers({
  auth: authReducer,
  burger: burgerReducer,
  orders: ordersReducer
});
