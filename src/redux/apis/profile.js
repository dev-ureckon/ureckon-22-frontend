import axios from '../../axios/axiosInstance'
import {
  fetchUserProfileSuccess,
  fetchUserProfileError,
  showToastTimer,
  updateUserProfileSuccess,
  userProfileRequest,
} from '../actions'

const commonProfileUrl = `/participant/management/profile`

export const getUserProfile = () => async (dispatch, getState) => {
  dispatch(userProfileRequest())
  const currentState = getState()
  const { accessToken } = currentState.userLogin.userInfo
  try {
    const response = await axios.get(commonProfileUrl, {
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
  dispatch(userProfileRequest())
  const currentState = getState()
  const { accessToken } = currentState.userLogin.userInfo
  try {
    const response = await axios.put(
      commonProfileUrl,
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

export const updateUserPassword =
  (oldPassword, newPassword) => async (dispatch, getState) => {
    const currentState = getState()
    const { accessToken } = currentState.userLogin.userInfo
    try {
      const response = await axios.patch(
        `${commonProfileUrl}/changepassword`,
        {
          oldPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      const { message } = response.data
      dispatch(showToastTimer(message, 'success'))
    } catch (error) {
      dispatch(showToastTimer('Error while updating user password, try again!', 'error'))
    }
  }

export const updateUserProfilePic = (file) => async (dispatch, getState) => {
  const currentState = getState()
  const { accessToken } = currentState.userLogin.userInfo
  try {
    const formData = new FormData()
    formData.append('file', file)
    const { file_link } = await axios.post(`${commonProfileUrl}/upload`, formData, {
      headers: { Authorization: accessToken },
    })
    dispatch(userProfileRequest())
    const { message, profilePic } = await axios.put(
      `${commonProfileUrl}/profilepic`,
      {
        profile_url: file_link,
      },
      {
        headers: { Authorization: accessToken },
      }
    )
    dispatch(
      updateUserProfileSuccess({
        profilePic,
      })
    )
    dispatch(showToastTimer(message, 'success'))
  } catch (error) {
    dispatch(
      showToastTimer('Error while updating user profile picture, try again!', 'error')
    )
  }
}

// API for unregisering from a particular event (can only be performed from the team leader)
// Takes the registration id of that particular event as argument
export const unregisterFromEvent = (regId) => async (dispatch, getState) => {
  const currentState = getState()
  const { accessToken } = currentState.userLogin.userInfo
  try {
    const response = await axios.delete(`/events/${regId}/unregister`, {
      headers: {
        Authorization: accessToken,
      },
    })
    const { msg } = response.data
    dispatch(showToastTimer(msg, 'success'))
  } catch (error) {
    dispatch(showToastTimer('Error while unregistering from event, try again!', 'error'))
  }
}
