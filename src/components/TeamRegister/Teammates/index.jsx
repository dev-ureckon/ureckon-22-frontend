import { TextField, Button, IconButton, Icon, InputAdornment, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { useStyles } from './styles.mui'
import './styles.css'

const Teammates = () => {
  const classes = useStyles()

  return (
    <div className="teammates-wrapper">
      <div className="search-wrapper">
        <Grid container>
          <Grid item xs={12} sm={12} md={7} className="add-teammates-header">
            Add Teammates
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <TextField
              placeholder="Enter Ureckon-ID"
              variant="standard"
              color="searchbar"
              focused
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton color="searchbar">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
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
