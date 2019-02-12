import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import imagesReducer from "./imagesReducer";
import errorReducer from "./errorReducer";
import pageReducer from "./pageReducer";

const rootReducer = combineReducers({
  images: imagesReducer,
  isLoading: loadingReducer,
  error: errorReducer,
  nextPage: pageReducer
});

export default rootReducer;
