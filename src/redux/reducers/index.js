import { combineReducers } from 'redux'
import sponsorReducer from './sponsors'
import { userLoginReducer, userRegisterReducer } from './auth.js'

const rootReducer = combineReducers({
  sponsor: sponsorReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
})

export default rootReducer
