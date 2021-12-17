import { combineReducers } from 'redux'
import sponsorReducer from './sponsors'
import newsfeedReducer from './newsfeed'
import { userLoginReducer, userRegisterReducer } from './auth.js'

const rootReducer = combineReducers({
  sponsor: sponsorReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  news: newsfeedReducer,
})

export default rootReducer
