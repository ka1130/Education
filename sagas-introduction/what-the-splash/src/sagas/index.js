import { all, put, take, call, takeEvery } from "redux-saga/effects";
import { IMAGES } from "../constants";

function* handleImagesLoad() {
  console.log("fetching images from unsplash");
}

function* watcherSaga() {}

function* rootSaga() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default rootSaga;
