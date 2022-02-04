import {
  USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_ERROR,
  UPDATE_USER_PROFILE_SUCCESS,
} from '../constants'

export const userProfileRequest = () => ({
  type: USER_PROFILE_REQUEST,
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

export const updateUserProfileSuccess = (updatedProfileData) => ({
  type: UPDATE_USER_PROFILE_SUCCESS,
  payload: updatedProfileData,
})
