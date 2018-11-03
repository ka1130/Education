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
    axios.get(url)
    .then(response => {
      dispatch(fetchWeatherSuccess(response));
      return response; 
    })
    .catch(error => dispatch(fetchWeatherFailure(error)));
  };
}

export const fetchWeatherBegin = () => ({
  type: FETCH_WEATHER_BEGIN
});

export const fetchWeatherSuccess = response => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: response.data
});

export const fetchWeatherFailure = error => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error.message
});