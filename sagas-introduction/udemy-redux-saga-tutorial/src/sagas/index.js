import usersSagas from "sagas/users";
import { all } from "redux-saga/effects";
// like in Promise.all => only act upon resolved promises once all of them are resolved
// but here saga does it with forked processes

export default function* rootSaga() {
  yield all([
    ...usersSagas
    // create a new array from the imported usersSagas
    // allows all this forked processes to be created in parallel
    // run the processes in parallel and wait for all of the to resolve
  ]);
}
