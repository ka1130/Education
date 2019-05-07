import { takeEvery } from "redux-saga/effects";
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authSaga,
  checkAuthStatusSaga
} from "redux/sagas/authSagas";
import * as actions from "redux/actions/types";

export function* watchAuth() {
  yield takeEvery(actions.LOGOUT_INIT, logoutSaga);
  // run logoutSaga whenever LOGOUT_INIT occurs
  yield takeEvery(actions.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actions.AUTH_USER, authSaga);
  yield takeEvery(actions.AUTH_CHECK_STATE, checkAuthStatusSaga);
}
