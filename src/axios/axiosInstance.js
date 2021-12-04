import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://ureckon-api-dev-spn77.ondigitalocean.app',
})

export default axiosInstance
