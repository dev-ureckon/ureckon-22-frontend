import { useEffect } from 'react'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { getAllEventCategories } from '../../redux/apis/eventCategories'

export const EventCategoriesLogic = () => {
    const dispatch = useDispatch()

    const { loading, categories, error } = useSelector((state) => state.eventCategories);

    useEffect(() => {
        dispatch(getAllEventCategories());
    }, [dispatch])

    return {
        categories
    }
}
