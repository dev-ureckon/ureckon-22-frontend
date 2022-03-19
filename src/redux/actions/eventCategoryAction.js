import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
} from '../constants/eventCategory'
import axios from 'axios'

export const fetchCategory = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: FETCH_CATEGORY_REQUEST,
    })

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/events/categories`
    )
    dispatch({
      type: FETCH_CATEGORY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FETCH_CATEGORY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
