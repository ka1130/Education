import { put } from 'redux-saga/effects';
import * as actionTypes from 'redux/actions/types';
import axios from 'axios';

/* 
  this start is turning the function into so-called generator
  generators are next generation JS features, they can be invoked incrementally
  i.e. you can pause during a function's execution, for exapmple to wait for the asynchronous function to finish
*/

export function* exampleSaga(action) {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  // const { latitude, longitude } = region || {};
  const region = 'Barcelona';

  const getDataByCity = `https://api.openweathermap.org/data/2.5/forecast?q=${region}&appid=${API_KEY}`;
  // const getDataByCoords = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

  // let location = typeof(region) === "object" ? getDataByCoords : getDataByCity;

  // return dispatch => {
  //   axios.get(location)
  //   .then(response => {
  //     dispatch(fetchWeatherSuccess(response));
  //     return response;
  //   })
  //   .catch(error => dispatch(fetchWeatherFailure(error)));
  // };

  /* 
    yield: it wouldn't continue before the step is done
  */
  yield console.log(getDataByCity, 'hello from saga');

  yield put({
    type: actionTypes.EXAMPLE,
  });
}
