import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import { updateUserPassword } from '../../redux/apis/profile'
import Input from '../input/index.jsx'
import SubmitButton from '../SubmitButton/index.jsx'
import './passwordModal.style.css'

const PasswordModal = ({ showPasswordModal, setShowPasswordModal }) => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    retypedPassword: '',
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }))
  }

  const modalRef = useRef(null)

  // useEffect(() => {
  //   const handler = (event) => {
  //     if (!modalRef.current.contains(event.target)) {
  //       setShowPasswordModal(false)
  //     }
  //   }
  //   window.addEventListener('click', handler)
  //   return () => window.removeEventListener('click', handler)
  // }, [])

  const handleSubmit = () => {
    dispatch(updateUserPassword(formData.oldPassword, formData.newPassword))
    setShowPasswordModal(false)
  }

  return (
    <div className="modalBackground">
      <form className="modalContainer" ref={modalRef} onSubmit={handleSubmit}>
        <div className="modalClose" onClick={() => setShowPasswordModal(false)}>
          {' '}
          X{' '}
        </div>
        <Input
          width="100%"
          label="Old Password"
          placeholder="Old Password"
          name="oldPassword"
          type="password"
          value={formData.oldPassword}
          onChange={(e) => handleChange(e)}
          variant="red"
        />
        <Input
          width="100%"
          label="New Password"
          placeholder="New Password"
          name="newPassword"
          type="password"
          value={formData.newPassword}
          onChange={(e) => handleChange(e)}
        />
        <Input
          width="100%"
          label="Retype New Password"
          placeholder="Retype New Password"
          name="retypedPassword"
          type="password"
          value={formData.retypedPassword}
          onChange={(e) => handleChange(e)}
          variant="red"
        />
        {formData.newPassword !== formData.retypedPassword && (
          <span className="alert-txt">Passwords does not match</span>
        )}

        <Button
          type="submit"
          variant="text"
          color="secondary"
          className="btn-container"
          style={{ marginTop: '4rem' }}
        >
          <SubmitButton label={'Save Changes'} />
        </Button>
      </form>
    </div>
  )
}

export default PasswordModal
