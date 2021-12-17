import axios from '../../axios/axiosInstance'

const url = '/participant/management'

export const completeProfile = async (phone, college, gender, accessToken) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
  }
  console.log(accessToken)
  const data = await axios.post(
    `${url}/complete-profile`,
    { phone, college, gender },
    config
  )
  return data
}
