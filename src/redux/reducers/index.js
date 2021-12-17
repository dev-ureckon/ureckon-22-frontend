import { combineReducers } from 'redux'
import sponsorReducer from './sponsors'
import toastReducer from './toast'
import { userLoginReducer, userRegisterReducer } from './auth.js'

const rootReducer = combineReducers({
  sponsor: sponsorReducer,
  toast: toastReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
})

export default rootReducer
