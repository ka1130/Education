import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "redux/reducers/auth";
import streamsReducer from "redux/reducers/streams";

const rootReducer = combineReducers({
  form: formReducer,
  // ^ this key has to be called form
  auth: authReducer,
  streams: streamsReducer
});

export default rootReducer;
