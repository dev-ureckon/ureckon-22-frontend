import axios from '../../axios/axiosInstance'

export const ContactLogic = () => {
  return {}
}

// Controller for creating new contact
export const createNewContact = async (contactData) => {
  try {
    const response = await axios.post('/contact', contactData)
    return response.data
  } catch (error) {
    return error.response.data
  }
}
