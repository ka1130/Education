import { combineReducers } from "redux";
import ingredientsReducer from "redux/reducers/ingredientsReducer";

export default combineReducers({
  ingredients: ingredientsReducer
});
