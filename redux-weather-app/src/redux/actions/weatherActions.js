import { 
  FETCH_WEATHER_BEGIN,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from 'redux/actions/types';

export function fetchWeather(region) {
  return {
    type: FETCH_WEATHER_BEGIN,
    payload: region
  }
}

export const fetchWeatherSuccess = response => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: response.data
});

export const fetchWeatherFailure = error => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error.message
});