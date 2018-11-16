import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from 'redux/actions/weatherActions';

export function* fetchWeather(action) {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const region = 'Barcelona';
  const getDataByCity = `https://api.openweathermap.org/data/2.5/forecast?q=${region}&appid=${API_KEY}`;

  try {
    const response = yield axios.get(getDataByCity);
    yield put(actions.fetchWeatherSuccess(response));
  } catch(error) {
    yield put(actions.fetchWeatherFailure(error))
  }
}
