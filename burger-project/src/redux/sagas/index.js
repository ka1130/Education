import { takeEvery } from "redux-saga/effects";
import { logoutSaga } from "redux/sagas/authSagas";
import * as actions from "redux/actions/types";

export function* watchAuth() {
  yield takeEvery(actions.LOGOUT_INIT, logoutSaga);
  // run logoutSaga whenever LOGOUT_INIT occurs
}
