import axios from 'axios';
import { 
  FETCH_WEATHER_BEGIN,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from 'redux/actions/types';

const API_KEY = '1d1ed4c5c279b3103998e234955244b6';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const city = 'Warsaw';
const url = `${ROOT_URL}&q=${city},pl`;

export function fetchWeather() {
  return dispatch => {
    dispatch(fetchWeatherBegin());
    return fetch(url)
      .then(handleErrors)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch(fetchWeatherSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchWeatherFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchWeatherBegin = () => ({
  type: FETCH_WEATHER_BEGIN
});

export const fetchWeatherSuccess = weather => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: { weather }
});

export const fetchWeatherFailure = error => ({
  type: FETCH_WEATHER_FAILURE,
  payload: { error }
});