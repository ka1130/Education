import { takeEvery, call, fork, put } from "redux-saga/effects";
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

const usersSagas = [fork(watchGetUsersRequest)];

export default usersSagas;
