import { useEffect , useState} from 'react'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllEventList } from '../../redux/apis/eventList'

export const EventListLogic = () => {
  const [ searchTerm, setSearchTerm] = useState("")
  const dispatch = useDispatch()
  const { eventCategorySlug } = useParams()

  const { loading, events, error } = useSelector((state) => state.eventList)

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


  const searchItem = (e) => {
    setSearchTerm(e.target.value)
  }

  function filterSearch(val) {
    if (searchTerm === '') {
      return val
    } else if (val.eventName.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val
    }
  }

  return {
    loading, error,
    events,
    eventCategorySlug,
    makeHeading,searchItem,filterSearch
  }
}
