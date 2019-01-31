import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from 'redux/actions/types';
import { fetchWeatherSaga } from 'redux/sagas/fetchWeather';

export function* fetchWeather() {
  yield takeEvery(actionTypes.FETCH_WEATHER_BEGIN, fetchWeatherSaga);
}