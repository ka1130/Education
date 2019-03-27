import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import { SEARCH_PERFORMED } from "actions/types";
import { searchError, searchSuccess } from "actions/search";

const apiKey = process.env.REACT_APP_API_KEY;

function* doSearch(searchPerformed) {
  try {
    console.log(searchPerformed, searchPerformed.searchTerm);
    const { searchTerm } = searchPerformed;
    console.log(searchTerm);
    const searchResults = yield call(
      axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          apiKey,
          q: searchTerm,
          limit: 25
        }
      })
    );
    // the object returned will be the evaluated value ton be called by the next yield
    console.log(searchResults);
    yield put(searchSuccess(searchResults.data.data));
  } catch (e) {
    yield put(searchError());
  }
}

export default function*() {
  yield takeLatest(SEARCH_PERFORMED, doSearch);
  // take the latest dispatched SEARCH_PERFORMED action,
  // when it is dispatched, then call doSearch and pass the action itself
  // to the doSearch as an argument to it
}
