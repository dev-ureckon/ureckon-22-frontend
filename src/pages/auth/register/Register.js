import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '../../../redux/actions'

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

  const handleChange = (e) => {
    setFormData((f) => ({
      ...f,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.number]: e.target.value,
      [e.target.password]: e.target.value,
      [e.target.collegeName]: e.target.value,
      [e.target.gender]: e.target.value,
    }))
  }
  //getting state from reducer
  const { data, error, loading } = useSelector((state) => state.userRegister)
  console.log(data, error, loading)
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
  //If user is already logged in Do not show this page
  useEffect(() => {
    if (data) navigate('/')
  }, [data, navigate])

  return {
    handleChange,
    formData,
    error,
    loading,
    handleSubmit,
  }
}
