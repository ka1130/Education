import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import streamsReducer from "redux/reducers/streams";

const rootReducer = combineReducers({
  form: formReducer,
  // ^ this key has to be called form
  streams: streamsReducer
});

export default rootReducer;
