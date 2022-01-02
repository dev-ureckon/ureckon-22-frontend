import axios from '../../axios/axiosInstance'
import {
  fetchUserProfileRequest,
  fetchUserProfileSuccess,
  fetchUserProfileError,
  showToastTimer,
  updateUserProfileRequest,
  updateUserProfileSuccess,
} from '../actions'

export const getUserProfile = () => async (dispatch, getState) => {
  dispatch(fetchUserProfileRequest())
  const currentState = getState()
  const { accessToken } = currentState.userLogin.userInfo
  try {
    const response = await axios.get('/participant/management/profile', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const { user, authProvider, registeredEvents } = response.data
    dispatch(fetchUserProfileSuccess(user, authProvider, registeredEvents))
  } catch (error) {
    dispatch(showToastTimer('Error while fetching user profile, try again!', 'error'))
    dispatch(fetchUserProfileError(error))
  }
}

export const updateUserProfile = (updatedProfileData) => async (dispatch, getState) => {
  dispatch(updateUserProfileRequest())
  const currentState = getState()
  const { accessToken } = currentState.userLogin.userInfo
  try {
    const response = await axios.put(
      '/participant/management/profile',
      {
        ...updatedProfileData,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    const actualData = response.data
    dispatch(updateUserProfileSuccess(actualData))
    dispatch(showToastTimer('Succesfully updated profile', 'success'))
  } catch (error) {
    dispatch(showToastTimer('Error while updating user profile, try again!', 'error'))
  }
}
