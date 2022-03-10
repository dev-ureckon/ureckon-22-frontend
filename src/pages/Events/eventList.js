import { useEffect } from 'react'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllEventList } from '../../redux/apis/eventList'

export const EventListLogic = () => {
    const dispatch = useDispatch()
    const { eventCategorySlug } = useParams()

    const { loading, events, error } = useSelector((state) => state.eventList)

    useEffect(() => {
        dispatch(getAllEventList(eventCategorySlug))
    }, [dispatch])

    return {
        events,
    }
}
