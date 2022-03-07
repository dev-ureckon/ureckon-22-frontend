import {
  USER_SEARCH_REQUEST,
  USER_SEARCH_SUCCESS,
  USER_SEARCH_FAILURE,
} from '../constants/userSearch'

export const userSearchReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SEARCH_REQUEST:
      return {
        loading: true,
        error: null,
      }

    case USER_SEARCH_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        error: null,
      }
    case USER_SEARCH_FAILURE:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
