import { combineReducers } from "redux";
import burgerReducer from "redux/reducers/burgerReducer";
import ordersReducer from "redux/reducers/ordersReducer";

export default combineReducers({
  burger: burgerReducer,
  orders: ordersReducer
});
