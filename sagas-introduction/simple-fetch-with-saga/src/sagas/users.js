import { takeEvery, put, call } from "redux-saga/effects";
import { getUsers } from "api/users";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from "actions/types";

export function* fetchUsers(action) {
  try {
    const response = yield call(getUsers);
    yield put({ type: FETCH_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_USERS_ERROR, error });
  }
}

export function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
}
