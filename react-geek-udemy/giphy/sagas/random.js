import axios from "axios";
import { put, call, takeLatest, select } from "redux-saga/effects";
import { GET_RANDOM_GIPHY } from "actions/types";
import { getRandomGiphyError, getRandomGiphySuccess } from "actions/random";

const apiKey = process.env.REACT_APP_API_KEY;

function* getRandomGiphy() {
  try {
    const res = yield call(axios.get, "https://api.giphy.com/v1/gifs/random", {
      params: {
        apiKey
      }
    });
    yield put(getRandomGiphySuccess(res.data.data));
  } catch (e) {
    console.log("error", e);
    yield put(getRandomGiphyError());
  }
}

export default function*() {
  yield takeLatest(GET_RANDOM_GIPHY, getRandomGiphy);
}
