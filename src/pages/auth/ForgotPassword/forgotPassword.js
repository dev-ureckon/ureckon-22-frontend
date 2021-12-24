import { useState } from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { requestPasswordReset } from '../../../redux/apis'

export const ForgotPasswordLogic = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
  })

  const { error, loading } = useSelector((state) => state.userLogin)

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
