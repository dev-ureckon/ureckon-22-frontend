import { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import { useStyles } from './styles.mui'
import './styles.css'

const Userlist = ({
  userInfo,
  user,
  addUserToTeam,
  removeUserFromTeam,
  isMember,
  savedUser,
}) => {
  const classes = useStyles()

  return (
    <div className="userlist-wrapper">
      <div className="users">
        <img
          src={userInfo ? userInfo.profilePic : user?.profilePic}
          alt="user"
          className="user-image"
        />
        <div className="user-details">
          <div className="userid">
            Ureckon ID: {userInfo ? userInfo.userId : user?.userId}
          </div>
          <div className="user-email">{userInfo ? userInfo.email : user?.email}</div>
        </div>
        {isMember || (user && savedUser.length > 0) ? (
          <Button className={classes.removeButton} onClick={removeUserFromTeam}>
            <CloseIcon />
          </Button>
        ) : (
          <Button
            className={classes.addButton}
            variant="contained"
            color="addMemberBtn"
            onClick={addUserToTeam}
          >
            <AddIcon />
          </Button>
        )}
      </div>
    </div>
  )
}

export default Userlist
