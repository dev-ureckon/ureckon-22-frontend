import { Navigate } from 'react-router-dom'
// Redux stuff
import { useSelector } from 'react-redux'

//If user is already logged in or registered
export function AvoidAuth({ children }) {
  const { userInfo } = useSelector((state) => state.userLogin)
  console.log(userInfo)
  if (userInfo) {
    // Redirect them to the / page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" />
  }
  return children
}
