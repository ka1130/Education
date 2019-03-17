import { combineReducers } from "redux";

const rootReducer = combineReducers({
  foo: () => "anything but undefined"
});

export default rootReducer;
