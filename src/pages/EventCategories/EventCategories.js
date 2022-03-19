import { useEffect, useState } from 'react'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { getAllEventCategories } from '../../redux/apis/eventCategories'

export const EventCategoriesLogic = () => {
  const dispatch = useDispatch()
  const [fakeLoading, setFakeLoading] = useState(true)

  const { loading, categories, error } = useSelector((state) => state.eventCategories)

  console.log(loading)
  console.log(fakeLoading)

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (!loading) {
  //       setFakeLoading(false)
  //     }
  //   }, 2000)
  // }, [loading])

  useEffect(() => {
    dispatch(getAllEventCategories())
  }, [dispatch])

  return {
    categories,
    loading,
    fakeLoading,
    setFakeLoading,
  }
}
