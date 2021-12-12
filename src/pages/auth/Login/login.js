import { useState } from 'react'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../../redux/actions'


export const LoginLogic = () => {
    const isMobile = window.innerWidth <= 768
    const dispatch = useDispatch()

    //getting state from reducer
    const { error, loading } = useSelector((state) => state.userLogin)

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

    const handleSubmit = (e) => {
        dispatch(userLogin(formData.email, formData.password))
    }

    return { isMobile, dispatch, formData, setFormData, handleChange, handleSubmit, loading, error }
}