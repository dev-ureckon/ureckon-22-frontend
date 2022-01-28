import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const initialState = {
  userLogin: {
    userInfo:
      JSON.parse(localStorage.getItem('userInfo')) ||
      JSON.parse(sessionStorage.getItem('userInfo'))
  },
  userRegister: {
    userInfo:
      JSON.parse(localStorage.getItem('userInfo')) ||
      JSON.parse(sessionStorage.getItem('userInfo'))
  }
}

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
)

export default store
