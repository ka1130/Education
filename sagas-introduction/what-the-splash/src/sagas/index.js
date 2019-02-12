import { all, takeEvery } from "redux-saga/effects";
import imagesSaga from "./imagesSaga";
import statsSaga from "./statsSaga";

function* rootSaga() {
  // yield takeEvery(IMAGES.LOAD, handleImagesLoad);
  // 'takeEvery' is a non-blocking effect - there are also blocking effects
  // as opposed to 'take' or 'call' which are both blocking effects
  // 'takeEvery' runs sagas in forked parallel processes
  // with 'takeEvery' no matter what sequence, the sagas will watch and handle relevant worker sagas
  yield all([imagesSaga(), statsSaga()]);
}

export default rootSaga;
