import { takeEvery } from "redux-saga/effects";
import * as actions from "actions/users";

// worker saga
function* getUsers() {
  try {
  } catch (e) {
    console.log(e);
  }
}

// watcher saga: watches when one particular action has been dispatched
// and then acts upon this action by calling the worker saga
function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}
