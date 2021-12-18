import axios from '../../axios/axiosInstance'

const url = '/auth/participant'

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const loginUser = (email, password) =>
  axios.post(`${url}/login`, { email, password }, config)

export const registerUser = async (email, password, name, college, phone, gender) => {
  const data = await axios.post(
    `${url}/register`,
    { email, password, name, college, phone, gender },
    config
  )
  return data
}

export const signUpSocial = async (idToken) => {
  console.log(idToken)
  const data = await axios.post(`${url}/auth-social-user`, { idToken }, config)
  return data
}

// API call for requesting password reset
export const requestPasswordReset = (email) => async (dispatch, getState) => {
  const currentState = getState()
  const { accessToken } = currentState.userLogin.userInfo
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
  }
  try {
    const response = await axios.post(
      `${url}/resetPassword`,
      {
        email,
      },
      config
    )
    const actualData = response.data
    return actualData
  } catch (error) {
    return error.response.data
  }
}
