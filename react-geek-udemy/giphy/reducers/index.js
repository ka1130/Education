import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import searchReducer from "reducers/search";

export default history =>
  combineReducers({
    router: connectRouter(history),
    search: searchReducer
  });
