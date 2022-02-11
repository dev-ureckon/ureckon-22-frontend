import { TextField, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useStyles } from './styles.mui'
import './styles.css'

const Teammates = () => {
  const classes = useStyles()

  return (
    <div className="teammates-container">
      <div className="search-wrapper">
        <div className="add-teammates-header">Add Teammates</div>
        <div style={{ marginTop: '-2rem' }}>
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            color="primary"
          />
        </div>
      </div>
      <div className="userlist-wrapper">
        <div className="users">
          <img
            src="https://i.pinimg.com/736x/b7/f9/ca/b7f9ca58135b349e96b56f54cd2fb356.jpg"
            alt="user"
            className="user-image"
          />
          <div className="user-details">
            <div className="userid">Ureckon ID: U-1234</div>
            <div className="username">Amitrajit Das</div>
            <div className="user-email">amitrajitdas31@gmail.com</div>
          </div>
          <Button className={classes.closeButton}>
            <CloseIcon />
          </Button>
        </div>
        <div className="users">
          <img
            src="https://i.pinimg.com/736x/b7/f9/ca/b7f9ca58135b349e96b56f54cd2fb356.jpg"
            alt="user"
            className="user-image"
          />
          <div className="user-details">
            <div className="userid">Ureckon ID: U-1234</div>
            <div className="username">Amitrajit Das</div>
            <div className="user-email">amitrajitdas31@gmail.com</div>
          </div>
          <Button className={classes.closeButton}>
            <CloseIcon />
          </Button>
        </div>
        <div className="users">
          <img
            src="https://i.pinimg.com/736x/b7/f9/ca/b7f9ca58135b349e96b56f54cd2fb356.jpg"
            alt="user"
            className="user-image"
          />
          <div className="user-details">
            <div className="userid">Ureckon ID: U-1234</div>
            <div className="username">Amitrajit Das</div>
            <div className="user-email">amitrajitdas31@gmail.com</div>
          </div>
          <Button className={classes.closeButton}>
            <CloseIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Teammates
