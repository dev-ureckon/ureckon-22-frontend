import { useState, useEffect } from 'react'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { userLogin } from '../../../redux/actions'

export const LoginLogic = () => {
  const isMobile = window.innerWidth <= 768
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  //getting state from reducer
  const { userInfo, error, loading } = useSelector((state) => state.userLogin)

  //If user is already logged in Do not show this page
  // or redirect to complete - profile page if not already registered with social auth
  useEffect(() => {
    if (
      userInfo &&
      userInfo.alreadyRegistered !== undefined &&
      !userInfo.alreadyRegistered
    ) {
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
    dispatch(userLogin(formData.email, formData.password))
  }

  return {
    isMobile,
    dispatch,
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    loading,
    error,
  }
}
