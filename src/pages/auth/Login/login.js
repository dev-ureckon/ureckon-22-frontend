import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../../redux/actions'

export const LoginLogic = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //getting state from reducer
  const { userInfo, error, loading } = useSelector((state) => state.userLogin)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }))
  }

  //If user is already logged in Do not show this page
  useEffect(() => {
    if (userInfo) {
      navigate('/profile')
    }
  }, [userInfo, navigate, loading])

  const handleSubmit = (e) => {
    dispatch(userLogin(formData.email, formData.password))
  }

  return {
    handleSubmit,
    handleChange,
    loading,
    error,
    userInfo,
    formData,
  }
}
