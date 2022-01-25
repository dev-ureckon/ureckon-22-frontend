import { combineReducers } from 'redux'
import sponsorReducer from './sponsors'
import newsfeedReducer from './newsfeed'
import toastReducer from './toast'
import { userLoginReducer, userRegisterReducer } from './auth.js'
import teamsReducer from './team.js'

const rootReducer = combineReducers({
  sponsor: sponsorReducer,
  toast: toastReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  news: newsfeedReducer,
  teams: teamsReducer
})

export default rootReducer
