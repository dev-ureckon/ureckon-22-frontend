import { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import { useStyles } from './styles.mui'
import './styles.css'

const Userlist = ({ userInfo, teamMatesArr, setTeamMatesArr }) => {
  const classes = useStyles()

  const [isMember, setIsMember] = useState(false)

  useEffect(() => {
    // teamMatesArr.find((user) => user._id === userInfo?._id)
    if (teamMatesArr.includes(userInfo._id)) {
      setIsMember(true)
    }

    if (!teamMatesArr.includes(userInfo._id)) {
      setIsMember(false)
    }
  }, [teamMatesArr, userInfo, setIsMember])

  const addUserToTeam = () => {
    setTeamMatesArr([...teamMatesArr, userInfo?._id])
    console.log(teamMatesArr)
  }
  const removeUserFromTeam = () => {
    setTeamMatesArr(teamMatesArr.filter((userId) => userId !== userInfo._id))
  }

  return (
    <div className="userlist-wrapper">
      <div className="users">
        <img src={userInfo && userInfo.profilePic} alt="user" className="user-image" />
        <div className="user-details">
          <div className="userid">Ureckon ID: {userInfo && userInfo.userId}</div>
          {/* <div className="username">{userInfo && userInfo.name}</div> */}
          <div className="user-email">{userInfo && userInfo.email}</div>
        </div>
        {/* <Button
          className={classes.addButton}
          variant="contained"
          color="addMemberBtn"
          onClick={addUserToTeam}
        >
          <AddIcon />
        </Button> */}
        {isMember ? (
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
