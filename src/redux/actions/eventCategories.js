import {
    EVENT_CATEGORIES_REQUEST,
    EVENT_CATEGORIES_SUCCESS,
    EVENT_CATEGORIES_FAILURE
} from '../constants'

export const fetchCategoriesRequest = () => ({
    type: EVENT_CATEGORIES_REQUEST,
})

export const fetchCategoriesSuccess = (newsfeed) => ({
    type: EVENT_CATEGORIES_SUCCESS,
    payload: newsfeed,
})

export const fetchCategoriesError = (error) => ({
    // here error is basically the error message
    type: EVENT_CATEGORIES_FAILURE,
    payload: error,
})
