import { takeEvery, put, call } from "redux-saga/effects";
import { getComments } from "api/comments";
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR
} from "actions/types";

export function* fetchComments() {
  try {
    const response = yield call(getComments);
    yield put({ type: FETCH_COMMENTS_SUCCESS, payload: response.data });
  } catch (error) {
    put({ type: FETCH_COMMENTS_ERROR, payload: error });
  }
}

export function* watchFetchComments() {
  yield takeEvery(FETCH_COMMENTS_REQUEST, fetchComments);
}
