import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
  // this form keyword has to be exactly this in order for the redux-form library to work correctly
});

export default rootReducer;
