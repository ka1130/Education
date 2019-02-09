import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import commentsReducer from "reducers/comments";

import authReducer from "reducers/auth";

const rootReducer = combineReducers({
  comments: commentsReducer,
  auth: authReducer,
  form: formReducer
});

export default rootReducer;
