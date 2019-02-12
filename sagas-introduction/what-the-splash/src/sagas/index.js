import {
  all,
  takeEvery,
  put,
  takeLatest,
  take,
  call
} from "redux-saga/effects";
// effects are just returning objects; these objects are passed back
// to the saga middleware which acts upon them accordingly

//watcher saga -> listens for actions -> invokes worker saga

function* hello() {
  console.log("hello saga");
  yield put({ type: "ACTION_FROM_WORKER" });
}

function* workerSaga() {
  console.log("login only once");
}

function* byebyeSaga() {
  console.log("bye bye");
}

function* watcherSaga() {
  yield take("LOGIN");
  yield call(workerSaga);
  yield take("LOGOUT");
  // ^ example of running sagas in a predefined sequence
  yield call(byebyeSaga);
}

export default function* rootSaga() {
  yield all([hello(), watcherSaga()]);
}
