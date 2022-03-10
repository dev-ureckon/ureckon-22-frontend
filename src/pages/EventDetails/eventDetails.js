import { useEffect } from 'react'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllEventDetails } from '../../redux/apis/eventDetails'

export const EventDetailsLogic = () => {
  const dispatch = useDispatch()
  const { eventCode } = useParams()

  const { loading, eventDetails, error } = useSelector((state) => state.eventDetails)

  useEffect(() => {
    dispatch(getAllEventDetails(eventCode))
  }, [dispatch])

  return {
    eventDetails,
  }
}
