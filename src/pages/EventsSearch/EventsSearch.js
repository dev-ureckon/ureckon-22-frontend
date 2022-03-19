import { useEffect, useState } from 'react'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { getEventsSearch } from '../../redux/apis/eventList'

export const EventSearchLogic = () => {
  const dispatch = useDispatch()
  const [searchedEventName, setSearchedEventName] = useState('')
  const [eventsList, setEventsList] = useState([])

  const { loading, events } = useSelector((state) => state.eventSearch)

  useEffect(() => {
    dispatch(getEventsSearch(searchedEventName))
  }, [dispatch, searchedEventName])

  useEffect(() => {
    setEventsList(events.events)
  }, [events])

  return {
    eventsList,
    setSearchedEventName,
  }
}
