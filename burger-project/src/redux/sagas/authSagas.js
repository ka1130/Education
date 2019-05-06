import * as actions from "redux/actions/types";
import { put } from "redux-saga/effects";

export function* logoutSaga(action) {
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("expirationTime");
  yield put({ type: actions.LOGOUT });
}
