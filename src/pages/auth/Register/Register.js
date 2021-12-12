import { useState } from 'react'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '../../../redux/actions'

export const RegisterLogic = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
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
  const { error, loading } = useSelector((state) => state.userLogin)
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
