import { all } from "redux-saga/effects";
import { watchFetchUsers } from "sagas/users";
import { watchFetchComments } from "sagas/comments";

export default function* rootSaga() {
  yield all([watchFetchUsers(), watchFetchComments()]);
}
