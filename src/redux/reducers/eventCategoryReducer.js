import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
} from '../constants/eventCategory'

export const eventCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case FETCH_CATEGORY_SUCCESS:
      return {
        loading: false,
        eventCategories: action.payload,
      }
    case FETCH_CATEGORY_FAILURE:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
