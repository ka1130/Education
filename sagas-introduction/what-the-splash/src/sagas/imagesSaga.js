import { takeEvery, select, call } from "redux-saga/effects";
import { IMAGES } from "../constants";
import { fetchImages } from "../api";

const getPage = state => state.nextPage;

function* handleImagesLoad() {
  const page = yield select(getPage);
  const images = yield call(fetchImages, page);
  // 'call' is a blocking effect, it will suspend the saga until the call has succeeded
}

export default function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
