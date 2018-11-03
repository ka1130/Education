import axios from 'axios';
import { 
  FETCH_WEATHER_BEGIN,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from 'redux/actions/types';

// 52.285282099999996 21.0279629
let coords = {
  lat: 12,
  lon: 21
}
let coords2;
const googolemapkey = 'AIzaSyDY5kZJmnORrvm1IODYBdB4sYjTOt6_maQ';

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords);
  return coords2 = position.coords;
});

console.log(coords2);

const API_KEY = '1d1ed4c5c279b3103998e234955244b6';
// const GEOLOCATED_URL =  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}`
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const city = 'Warsaw';
const url = `${ROOT_URL}&q=${city},pl`;
// const url2 = GEOLOCATED_URL;

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