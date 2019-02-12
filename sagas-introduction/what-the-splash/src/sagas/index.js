import { all, takeEvery } from "redux-saga/effects";
// effects are just returning objects; these objects are passed back
// to the saga middleware which acts upon them accordingly

//watcher saga -> listens for actions -> invokes worker saga

function* hello() {
  console.log("hello saga");
}

function* workerSaga() {
  console.log("hello from worker saga");
}

function* watcherSaga() {
  yield takeEvery("HELLO", workerSaga);
}

export default function* rootSaga() {
  yield all([hello(), watcherSaga()]);
}
