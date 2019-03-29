import axios from "axios";
import { put, call, takeLatest, select } from "redux-saga/effects";
// select selects parts of global state on the store
import { SEARCH_PERFORMED } from "actions/types";
import { searchError, searchSuccess } from "actions/search";

const apiKey = process.env.REACT_APP_API_KEY;

const selectSearchState = state => state.search;

function* doSearch(action) {
  const { currentOffset } = yield select(selectSearchState);
  try {
    const searchTerm = action.payload;
    const searchResults = yield call(
      axios.get,
      "https://api.giphy.com/v1/gifs/search",
      {
        params: {
          apiKey,
          q: searchTerm,
          limit: 50,
          offset: currentOffset
        }
      }
    );
    yield put(searchSuccess(searchResults.data.data));
  } catch (e) {
    console.log("error", e);
    yield put(searchError());
  }
}

export default function*() {
  yield takeLatest(SEARCH_PERFORMED, doSearch);
  // take the latest dispatched SEARCH_PERFORMED action,
  // when it is dispatched, then call doSearch and pass the action itself
  // to the doSearch as an argument to it
}
