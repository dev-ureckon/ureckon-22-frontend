import { useEffect } from 'react'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { getAllEventList } from '../../redux/apis/eventList'

export const EventListLogic = () => {
  const dispatch = useDispatch()

  const { loading, events, error } = useSelector((state) => state.eventList)

  useEffect(() => {
    dispatch(getAllEventList())
  }, [dispatch])

  return {
    events,
  }
}
