import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function AuthProtectedRoute(props) {
  const { userInfo } = useSelector((state) => state.userLogin)

  if (userInfo) {
    console.log(userInfo)
    if (userInfo.alreadyRegistered !== undefined && !userInfo.alreadyRegistered) {
      return <Navigate to="/complete-profile" />
    } else if (
      (userInfo.alreadyRegistered !== undefined && userInfo.alreadyRegistered) ||
      userInfo.alreadyRegistered === undefined
    ) {
      return props.children
    }
  } else {
    return <Navigate to="/login" />
  }
}
