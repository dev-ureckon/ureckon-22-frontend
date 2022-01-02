import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_ERROR,
} from '../constants'

export const fetchUserProfileRequest = () => ({
  type: FETCH_USER_PROFILE_REQUEST,
})

export const fetchUserProfileSuccess = (user, authProvider, registeredEvents) => ({
  type: FETCH_USER_PROFILE_SUCCESS,
  payload: {
    user,
    authProvider,
    registeredEvents,
  },
})

export const fetchUserProfileError = (error) => ({
  type: FETCH_USER_PROFILE_ERROR,
  payload: error,
})
