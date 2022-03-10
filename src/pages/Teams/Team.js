import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllTeams } from '../../redux/apis'
export const TeamsLogic = () => {
  const dispatch = useDispatch()
  const { loading, teams: teamData } = useSelector((state) => state.teams)
  useEffect(() => {
    dispatch(getAllTeams())
  }, [dispatch])

  return { loading, teamData }
}
