import { combineReducers } from 'redux'
import sponsorReducer from './sponsors'
import newsfeedReducer from './newsfeed'
import toastReducer from './toast'
import { userLoginReducer, userRegisterReducer } from './auth.js'
import userProfileReducer from './profile'
import teamsReducer from './team.js'
import eventCategoriesReducer from './eventCategories'
import eventDetailsReducer from './eventDetails'
import { eventListReducer, eventSearchReducer } from './eventList'

const rootReducer = combineReducers({
  sponsor: sponsorReducer,
  toast: toastReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userProfile: userProfileReducer,
  news: newsfeedReducer,
  teams: teamsReducer,
  eventCategories: eventCategoriesReducer,
  eventDetails: eventDetailsReducer,
  eventList: eventListReducer,
  eventSearch: eventSearchReducer
})

export default rootReducer
