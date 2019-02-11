import { takeEvery, call, fork, put, takeLatest } from "redux-saga/effects";
// call => call sequentially, waiting for a promise to resolve for instance
import * as actions from "actions/users";
import * as api from "api/users";

/* Worker saga */
function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    /* 
      once this call resolves, it will assign the result to const result variable
      any code after this line above will run only after the call above resolves
      so there's no callbacks at all 
    */
    console.log(result);
    //now we need to dispatch a success action, using 'put' effect
    yield put(actions.getUsersSuccess({ items: result.data.data }));
  } catch (e) {
    console.log(e);
  }
}

/* Watcher saga: 
watches when one particular action has been dispatched
and then acts upon this action by calling the worker saga  
*/
function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* createUser(action) {
  try {
    yield call(api.createUser, {
      firstName: action.payload.firstName,
      lastName: action.payload.lastName
    });
    yield call(getUsers);
  } catch (e) {
    console.log(e);
  }
}

function* watchCreateUserRequest(user) {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
  //2nd arg is createUser worker saga
}

const usersSagas = [fork(watchGetUsersRequest), fork(watchCreateUserRequest)];

export default usersSagas;
