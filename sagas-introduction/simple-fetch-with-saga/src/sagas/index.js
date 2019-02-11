import { all } from "redux-saga/effects";
import { watchFetchUsers } from "sagas/users";

export default function* rootSaga() {
  yield all([watchFetchUsers()]);
}
