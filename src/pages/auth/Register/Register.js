import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '../../../redux/actions'
import swal from 'sweetalert'

export const RegisterLogic = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    collegeName: '',
    gender: '',
  })

  //getting state from reducer
  const { userInfo, error, loading } = useSelector((state) => state.userRegister)

  // If user is already logged in Do not show this page
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
    dispatch(
      userRegister(
        formData.email,
        formData.password,
        formData.name,
        formData.collegeName,
        formData.number,
        formData.gender
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
