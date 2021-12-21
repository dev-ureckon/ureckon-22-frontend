import { combineReducers } from 'redux'
import sponsorReducer from './sponsors'
import newsfeedReducer from './newsfeed'
import toastReducer from './toast'
import { userLoginReducer, userRegisterReducer } from './auth.js'

const rootReducer = combineReducers({
  sponsor: sponsorReducer,
  toast: toastReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  news: newsfeedReducer,
})

export default rootReducer
