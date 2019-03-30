import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import searchReducer from "reducers/search";
import giphyDisplayReducer from "reducers/giphy-display";
import randomGiphyReducer from "reducers/random";

export default history =>
  combineReducers({
    router: connectRouter(history),
    search: searchReducer,
    giphyDisplay: giphyDisplayReducer,
    randomGiphy: randomGiphyReducer
  });
