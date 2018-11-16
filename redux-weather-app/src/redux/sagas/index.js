import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from 'redux/actions/types';
import { exampleSaga } from 'redux/sagas/example';
import { fetchWeatherSaga } from 'redux/sagas/fetchWeather';

export function* watchExample() {
  yield takeEvery(actionTypes.EXAMPLE_INITIATE, exampleSaga)
}

export function* fetchWeather() {
  yield takeEvery(actionTypes.FETCH_WEATHER_INITIATE, fetchWeatherSaga);
}