import { useEffect, useState } from 'react'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllEventList } from '../../redux/apis/eventList'

export const EventListLogic = () => {
  const dispatch = useDispatch()
  const [fakeLoading, setFakeLoading] = useState(true)
  const { eventCategorySlug } = useParams()

  const { loading, events, error } = useSelector((state) => state.eventList)

  useEffect(() => {
    setTimeout(() => {
      if (!loading) {
        setFakeLoading(false)
      }
    }, 2000)
  }, [loading])

  useEffect(() => {
    dispatch(getAllEventList(eventCategorySlug))
  }, [dispatch])

  function makeHeading(slug) {
    var words = slug.split('-')

    for (var i = 0; i < words.length; i++) {
      var word = words[i]
      words[i] = word.charAt(0).toUpperCase() + word.slice(1)
    }

    return words.join(' ')
  }

  return {
    events,
    eventCategorySlug,
    makeHeading,
    fakeLoading
  }
}
