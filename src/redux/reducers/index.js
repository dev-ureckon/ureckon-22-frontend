import { combineReducers } from 'redux'
import sponsorReducer from './sponsors'
import newsfeedReducer from './newsfeed'
import toastReducer from './toast'
import { userLoginReducer, userRegisterReducer } from './auth.js'
import { userSearchReducer, teamRegisterReducer } from './eventRegReducer'
import userProfileReducer from './profile'
import teamsReducer from './team.js'

const rootReducer = combineReducers({
  sponsor: sponsorReducer,
  toast: toastReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userProfile: userProfileReducer,
  news: newsfeedReducer,
  teams: teamsReducer,
  userSearch: userSearchReducer,
  teamRegister: teamRegisterReducer,
})

export default rootReducer
