import { combineReducers } from 'redux'
import sponsorReducer from './sponsors'

const rootReducer = combineReducers({
  sponsor: sponsorReducer
})

export default rootReducer
