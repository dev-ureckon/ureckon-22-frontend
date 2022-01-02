import axios from '../../axios/axiosInstance'
import {
  fetchUserProfileRequest,
  fetchUserProfileSuccess,
  fetchUserProfileError,
  showToastTimer,
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
