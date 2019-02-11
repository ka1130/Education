import { put, call, takeEvery, all } from "redux-saga/effects";

export function* helloSaga() {
  console.log("Hello Saga");
}

export const delay = ms => new Promise(res => setTimeout(res, ms));

// worker saga
export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: "INCREMENT" });
}

// watcher saga
// takeEvery listens for dispatched INCREMENT_ASYNC actions and runs incrementAsync each time.
export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

// this saga yields an array with the results of calling our two sagas
// two resulting Generators will be started in parallel.
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}

/*
  call just like put, returns an Effect which instructs the middleware
  to call a given function with the given arguments
  neither put nor call performs any dispatch or asynchronous call by themselves, 
  they return plain JavaScript objects

  put({type: 'INCREMENT'}) // => { PUT: {type: 'INCREMENT'} }
  call(delay, 1000)        // => { CALL: {fn: delay, args: [1000]}}
*/
