import { Navigate } from 'react-router-dom'
// Redux stuff
import { useSelector } from 'react-redux'

//If user is already logged in Do not show this page
// or redirect to complete - profile page if not already registered with social auth

export function AvoidAuth({ children }) {
  const { userInfo } = useSelector((state) => state.userLogin)

  if (userInfo && !userInfo.alreadyRegistered) {
    console.log('gh')
    return <Navigate to="/complete-profile" />
  } else if (userInfo) {
    return <Navigate to="/" />
  }
  return children
}
