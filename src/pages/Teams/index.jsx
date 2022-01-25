import { Container, Grid, Typography, Card, CardActions, Paper } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import { TeamsLogic } from './Team.js'
import { useStyles } from './teams.style.js'
export default function Team() {
  const { teamData } = TeamsLogic()
  const classes = useStyles()
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
                        <div style={{ padding: '1rem' }}>
                          <Card>
                            <Paper
                              style={{
                                background: `linear-gradient(#00000000, #000000a3),url(${teamData.picture})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                              }}
                              className={classes.teamMember_image}
                            >
                              <div className={classes.teamMember_name}>
                                <Typography variant="h5">{teamData.name}</Typography>
                                <Typography variant="subtitle2">
                                  {teamData.title}
                                </Typography>
                              </div>
                            </Paper>
                            <Paper className={classes.teamMember_social}>
                              <Typography variant="subtitle2" align="center">
                                Email: {teamData.email}
                              </Typography>
                              {console.log(teamData.social)}
                              <Typography variant="subtitle2" align="center">
                                {teamData.social && teamData.social.facebook ? (
                                  <>
                                    <a
                                      href={teamData.social.facebook}
                                      className={classes.anchor}
                                    >
                                      <FacebookIcon className={classes.socialIcon} />
                                    </a>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {teamData.social && teamData.social.linkedIn ? (
                                  <>
                                    <a
                                      href={teamData.social.linkedIn}
                                      className={classes.anchor}
                                    >
                                      <LinkedInIcon className={classes.socialIcon} />
                                    </a>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {teamData.social && teamData.social.twitter ? (
                                  <a
                                    href={teamData.social.twitter}
                                    className={classes.anchor}
                                  >
                                    <TwitterIcon className={classes.socialIcon} />
                                  </a>
                                ) : (
                                  <></>
                                )}
                              </Typography>
                            </Paper>
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
