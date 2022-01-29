import {
    EVENT_CATEGORIES_REQUEST,
    EVENT_CATEGORIES_SUCCESS,
    EVENT_CATEGORIES_FAILURE
} from '../constants'

const initialState = {
    loading: false,
    error: '',
    categories: [], // All of the existing event categories fetched from server, initially empty
}

const eventCategoriesReducer = (state = initialState, action) => {
    const { type, payload } = action
    //   The payload here can basically contain both the entire categories list as well as the error message whenever it is applicable
    switch (type) {
        case EVENT_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case EVENT_CATEGORIES_SUCCESS:
            return {
                categories: payload,
                loading: false,
                error: '',
            }
        case EVENT_CATEGORIES_FAILURE:
            return {
                categories: [],
                loading: false,
                error: payload,
            }
        default:
            return state
    }
}

export default eventCategoriesReducer
