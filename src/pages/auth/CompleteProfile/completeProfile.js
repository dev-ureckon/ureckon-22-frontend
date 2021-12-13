import { useEffect, useState } from 'react'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { completeProfileAction } from '../../../redux/actions'

export const CompleteProfileLogic = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    collegeName: '',
    gender: '',
  })

  //getting state from reducer
  const { userInfo, error, loading } = useSelector((state) => state.userLogin)

  //If user is already logged in Do not show this page
  // or redirect to complete - profile page if not already registered with social auth
  useEffect(() => {
    if (userInfo && userInfo.alreadyRegistered !== undefined && !userInfo.alreadyRegistered) {
      navigate('/complete-profile')
    } else if (userInfo) {
      navigate('/')
    }
  }, [userInfo, navigate, loading])

  const handleChange = (e) => {
    setFormData((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    console.log('submitted')
    dispatch(
      completeProfileAction(
        formData.number,
        formData.collegeName,
        formData.gender,
        userInfo.accessToken,
        navigate
      )
    )
  }

  return {
    handleChange,
    formData,
    error,
    loading,
    handleSubmit,
  }
}
