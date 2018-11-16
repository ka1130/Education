import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from 'redux/actions/types';
import { exampleSaga } from 'redux/sagas/example';

export function* watchExample() {
  yield takeEvery(actionTypes.EXAMPLE_INITIATE, exampleSaga)
}