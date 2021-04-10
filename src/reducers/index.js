import { combineReducers } from 'redux'

import userReducer from './users'
import userDetailsReducer from './userDetails'

const rootReducer = combineReducers({
  users: userReducer,
  userDetails: userDetailsReducer
})

export default rootReducer
