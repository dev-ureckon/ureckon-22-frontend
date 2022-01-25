import { Container, Grid, Typography, Card, CardActions, Paper } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllTeams } from '../../redux/apis'
export default function Team() {
  const dispatch = useDispatch()
  const { teams: teamData } = useSelector((state) => state.teams)
  useEffect(() => {
    dispatch(getAllTeams())
  }, [dispatch])

  console.log(teamData.team)
  return (
    <Container>
      {teamData &&
        teamData.team &&
        teamData.team.map((item, index) => {
          return (
            <div key={index}>
              <Typography variant="h2" color="primary">
                {item.categoryName}
              </Typography>

              <Grid container>
                {teamData &&
                  teamData.team &&
                  item.teamList.map((teamData, index) => {
                    return (
                      <Grid item md={3} xs={12} lg={3} key={index}>
                        <div style={{padding: '1rem'}}>
                          <Card>
                            <Paper
                              style={{
                                background: `linear-gradient(#00000000, #000000a3),url(${teamData.picture})`,
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
                                {teamData.name}
                              </Typography>
                            </Paper>
                            <CardActions disableSpacing>Icons</CardActions>
                          </Card>
                        </div>
                      </Grid>
                    )
                  })}
              </Grid>
            </div>
          )
        })}
    </Container>
  )
}
