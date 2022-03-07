import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import { useStyles } from './styles.mui'
import './styles.css'

const Userlist = ({ userInfo }) => {
  const classes = useStyles()

  return (
    <div className="userlist-wrapper">
      <div className="users">
        <img src={userInfo && userInfo.profilePic} alt="user" className="user-image" />
        <div className="user-details">
          <div className="userid">Ureckon ID: {userInfo && userInfo.userId}</div>
          <div className="username">{userInfo && userInfo.name}</div>
          <div className="user-email">{userInfo && userInfo.email}</div>
        </div>
        <Button className={classes.addButton} variant="contained" color="addMemberBtn">
          <AddIcon />
        </Button>
        {/* <Button className={classes.removeButton}>
            <CloseIcon />
          </Button> */}
      </div>
    </div>
  )
}

export default Userlist
