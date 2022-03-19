import { useEffect, useState } from 'react'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllEventDetails } from '../../redux/apis/eventDetails'

export const EventDetailsLogic = () => {
  const dispatch = useDispatch()
  const { eventCode } = useParams()
  const [fakeLoading, setFakeLoading] = useState(true)

  const { loading, eventDetails, error } = useSelector((state) => state.eventDetails)

  useEffect(() => {
    setTimeout(() => {
      if (!loading) {
        setFakeLoading(false)
      }
    }, 2000)
  }, [loading])

  useEffect(() => {
    dispatch(getAllEventDetails(eventCode))
  }, [dispatch])

  return {
    eventDetails,
    fakeLoading
  }
}
