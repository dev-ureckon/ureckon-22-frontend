import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllTeams } from '../../redux/apis'
export const TeamsLogic = () => {
  const dispatch = useDispatch()
  const { loading, teams: teamData } = useSelector((state) => state.teams)
  const [fakeLoading, setFakeLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      if (!loading) {
        setFakeLoading(false)
      }
    }, 2000)
  }, [loading])

  useEffect(() => {
    dispatch(getAllTeams())
  }, [dispatch])

  return { loading, teamData, fakeLoading }
}
