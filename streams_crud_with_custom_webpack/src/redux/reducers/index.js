import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  form: formReducer
  // ^ this key has to be called form
});

export default rootReducer;
