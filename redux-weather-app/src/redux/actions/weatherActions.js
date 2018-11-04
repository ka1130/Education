import axios from 'axios';
import { 
  FETCH_WEATHER_BEGIN,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from 'redux/actions/types';

const googolemapkey = 'AIzaSyDY5kZJmnORrvm1IODYBdB4sYjTOt6_maQ';
const API_KEY = '1d1ed4c5c279b3103998e234955244b6';

export function fetchWeather(region) {
  const { latitude, longitude } = region || {};

  const getDataByCity = `https://api.openweathermap.org/data/2.5/forecast?q=${region}&appid=${API_KEY}`;
  const getDataByCoords = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

  let location = typeof(region) === "object" ? getDataByCoords : getDataByCity;

  return dispatch => {
    axios.get(location)
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