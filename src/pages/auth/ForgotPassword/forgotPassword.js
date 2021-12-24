import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { requestPasswordReset } from '../../../redux/apis'

export const ForgotPasswordLogic = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
  })

  const { userInfo, error, loading } = useSelector((state) => state.userLogin)

  //If user is already logged in Do not show this page
  useEffect(() => {
    if (userInfo) {
      navigate('/')
    } else {
      navigate('/forgot-password')
    }
  }, [userInfo, navigate, loading])

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  // Handler function for submiting the form data and requesting password reset
  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(requestPasswordReset(formData.email))
    setFormData({ email: '' })
  }

  return {
    handleChange,
    formData,
    error,
    loading,
    handleFormSubmit,
  }
}
