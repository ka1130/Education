import {
  FETCH_WEATHER_BEGIN,
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_SUCCESS
} from 'redux/actions/types';

const initialState = {
  weather: [],
  loading: false,
  error: null,
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.payload,
      };

    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
