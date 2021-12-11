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

export const signUpSocial = (idToken) => {
  console.log(idToken)
}
