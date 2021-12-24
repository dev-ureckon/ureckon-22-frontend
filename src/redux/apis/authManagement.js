import axios from '../../axios/axiosInstance'

const url = '/participant/management'

const createConfig = (accessToken) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
  }
}

export const completeProfile = async (phone, college, gender, accessToken) => {
  const config = createConfig(accessToken)
  console.log(accessToken)
  const data = await axios.post(
    `${url}/complete-profile`,
    { phone, college, gender },
    config
  )
  return data
}

// API call for setting new password
export const setNewPassword =
  (oldPassword, newPassword) => async (dispatch, getState) => {
    const currentState = getState()
    const { accessToken } = currentState.userLogin.userInfo
    const config = createConfig(accessToken)
    try {
      const response = await axios.patch(
        `${url}/profile/changepassword`,
        {
          oldPassword,
          newPassword,
        },
        config
      )
      const actualData = response.data
      return actualData
    } catch (error) {
      return error.response.data
    }
  }
