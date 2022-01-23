import { useState } from 'react'
import Input from '../input/index.jsx'
import SubmitButton from '../SubmitButton/index.jsx'
import './passwordModal.style.css'

const PasswordModal = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    retypedPassword: '',
  })

  const handleChange = (e) => {
    setFormData((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
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

        <div className="btn-container">
          <SubmitButton label={'Update'} />
        </div>
      </div>
    </div>
  )
}

export default PasswordModal
