import { combineReducers } from 'redux'
import commentsReducer from 'reducers/comments'
import authReducer from 'reducers/auth'

const rootReducer = combineReducers({
  comments: commentsReducer,
  auth: authReducer,
})

export default rootReducer
