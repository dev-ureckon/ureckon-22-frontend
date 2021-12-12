import { useState } from 'react'

//Redux
import { useSelector } from 'react-redux'

export const CompleteProfileLogic = () => {
  // const dispatch = useDispatch()
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
  const { error, loading } = useSelector((state) => state.userLogin)

  const handleSubmit = (e) => {
    console.log('submitted')
  }

  return {
    handleChange,
    formData,
    error,
    loading,
    handleSubmit,
  }
}
