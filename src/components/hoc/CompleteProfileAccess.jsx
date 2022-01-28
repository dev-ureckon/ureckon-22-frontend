import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function CompleteProfileAccess (props) {
  const { userInfo } = useSelector((state) => state.userLogin)

  if (userInfo) {
    if (userInfo.alreadyRegistered !== undefined && !userInfo.alreadyRegistered) {
      return props.children
    } else if (
      (userInfo.alreadyRegistered !== undefined && userInfo.alreadyRegistered) ||
      userInfo.alreadyRegistered === undefined
    ) {
      return <Navigate to='/profile' />
    }
  } else {
    return <Navigate to='/login' />
  }
}
