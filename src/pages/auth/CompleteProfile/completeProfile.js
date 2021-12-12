import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

//Redux
import { useDispatch, useSelector } from 'react-redux'

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

  const handleChange = (e) => {
    setFormData((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }))
  }

  //getting state from reducer
  const { userInfo, error, loading } = useSelector((state) => state.userRegister)

  const handleSubmit = (e) => {
    console.log('submitted')
  }

  //If user is already logged in Do not show this page
  useEffect(() => {
    if (userInfo && userInfo.alreadyRegistered) {
      navigate('/')
    }
  }, [userInfo, navigate, loading])

  return {
    handleChange,
    formData,
    error,
    loading,
    handleSubmit,
  }
}
