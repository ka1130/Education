import { combineReducers } from 'redux';
import weather from 'redux/reducers/weatherReducer';

const rootReducer = combineReducers({
  weather
});

export default rootReducer;
