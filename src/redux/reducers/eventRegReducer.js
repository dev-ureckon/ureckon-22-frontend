import {
  USER_SEARCH_REQUEST,
  USER_SEARCH_SUCCESS,
  USER_SEARCH_FAILURE,
  TEAM_REGISTER_REQUEST,
  TEAM_REGISTER_SUCCESS,
  TEAM_REGISTER_FAILURE,
} from '../constants/eventRegister'

export const userSearchReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case USER_SEARCH_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
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

export const teamRegisterReducer = (
  state = { loading: false, data: '', success: false },
  action
) => {
  switch (action.type) {
    case TEAM_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case TEAM_REGISTER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        success: true,
      }
    case TEAM_REGISTER_FAILURE:
      return {
        loading: false,
        error: action.payload,
        success: false,
      }

    default:
      return state
  }
}
