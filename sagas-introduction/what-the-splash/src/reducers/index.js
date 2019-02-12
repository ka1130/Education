import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  images: imagesReducer,
  isLoading: loadingReducer,
  error: errorReducer
});

export default rootReducer;
