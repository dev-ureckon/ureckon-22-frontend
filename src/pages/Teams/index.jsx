import {Container, Grid, Typography, Card , CardActions, Paper} from '@mui/material'
import React from 'react'



export default function Team() {
  return (
    <Container>
      <Typography variant="h2" color="primary">
        Faculty Coordinators
      </Typography>

      <Grid container>
        <Grid item md={3} xs={12} lg={3}>
          <div>
            <Card>
              <Paper
                style={{
                  background: `linear-gradient(#00000000, #000000a3),
    url("https://s3-alpha-sig.figma.com/img/e4ac/682e/4bbe4e2cdbc6ddd4ba369ecfc557a00b?Expires=1644192000&Signature=ZqZ~u3L-K-p1yjh3qL22jb3z5UORXkAQuAS-e6HVVhIKeFaJ4JleQt6oSY6Ay3bOj~FJQd1mK1gD2lbbR5HUqIaLE0b92g2fEM6TTe~XO1Bbrpblr85sfRv9PJd72pOsO97OfrOAFQfgTfIeq3pqRwHPysqrdwvssxZXADQuS2Mf8siE5MIEmOpEGYuBGKf0x7RThVtglI95hkE9OW5FXyXF0weIElFFlBYSWw-fzwBGkhsMZXEQFwwPZ10e~cVZ1c5g8CN5WHidFI0RdribO4PZbkFvwjjr0zY-b6stF9Wl3b8-YmuXszzoKp87uOAZqbqB8obum44z5-AsZ7CytQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA")`,

                  color: '#fff',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '272px',
                  position: 'relative',
                }}
              >
                <Typography
                  style={{
                    padding: '0.6rem',
                    width: '100%',
                    position: 'absolute',
                    top: '85%',
                  }}
                >
                  Hiji biji
                </Typography>
              </Paper>
              <CardActions disableSpacing>Icons</CardActions>
            </Card>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
