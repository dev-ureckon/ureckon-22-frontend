import axios from '../../axios/axiosInstance'
import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesError,
} from '../actions'

export const getAllEventCategories = () => async (dispatch) => {
  dispatch(fetchCategoriesRequest())
  try {
    const response = await axios.get('/event/categories')
    const actualData = response.data
    dispatch(fetchCategoriesSuccess(actualData))
  } catch (error) {
    dispatch(fetchCategoriesError(error.message))
  }
}
