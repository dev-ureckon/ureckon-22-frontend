import {
  USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_ERROR,
  UPDATE_USER_PROFILE_SUCCESS,
} from '../constants'

const initialState = {
  loading: true,
  error: '',
  userInfo: null,
  authProvider: null,
  registeredEvents: [],
}

const userProfileReducer = (state = initialState, action = {}) => {
  const { type, payload } = action
  switch (type) {
    // Whenever any API is called for the user profile then this action gets executed
    case USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        userInfo: payload.user,
        authProvider: payload.authProvider,
        registeredEvents: payload.registeredEvents,
        userProfile: payload.user,
      }
    case FETCH_USER_PROFILE_ERROR:
      return {
        loading: false,
        error: payload,
        userInfo: null,
        authProvider: null,
        registeredEvents: [],
        userProfile: null,
      }
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        userInfo: {
          ...state.userInfo,
          ...payload,
        },
        userProfile: {
          ...state.userProfile,
          ...payload,
        },
      }
    default:
      return state
  }
}

export default userProfileReducer
