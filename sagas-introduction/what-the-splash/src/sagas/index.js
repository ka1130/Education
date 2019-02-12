import { all, put, take, call, takeEvery } from "redux-saga/effects";
import { IMAGES } from "../constants";
import imagesSaga from "./imagesSaga";

function* handleImagesLoad() {
  console.log("fetching images from unsplash");
}

function* watcherSaga() {}

function* rootSaga() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
  // a non-blocking effect - there are also blocking effects
  // as opposed to 'take' or 'call' which are both blocking effects
  // 'takeEvery' runs sagas in forked parallel processes
  // with 'takeEvery' no matter what sequence, the sagas will watch and handle relevant worker sagas
}

// export default rootSaga;
export default imagesSaga;
