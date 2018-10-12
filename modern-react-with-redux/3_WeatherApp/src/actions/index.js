import axios from 'axios';

const API_KEY = '02230cf0e31741f5ca1a2b8f7d73c966';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},pl`;
  const request = axios.get(url);

  console.log('Request', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

// Middlewars are functions that take in action and depending on the action's type (or payload or any other thing)
// the middleware can choose to let the action pass through, it can manipulate the action or console.log it etc.
// or stop it all together - they can do all these kinds of stuff before the action hits the reducer
// like kind of gatekeepers
// all the actions we create flow through middleware and middlewares can modify actions
// we can have many steps of middleware in our application
