import { Container, Grid, Typography, Card, Paper } from '@mui/material'
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
                  item.teamList.map((teamMemberData, indexKey) => {
                    return (
                      <Grid item md={3} xs={12} lg={3} key={indexKey}>
                        <div style={{ padding: '1rem' }}>
                          <Card>
                            <Paper
                              style={{
                                background: `linear-gradient(#00000000, #000000a3),url(${teamMemberData.picture})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                              }}
                              className={classes.teamMember_image}
                            >
                              <div className={classes.teamMember_name}>
                                <Typography variant="h5">
                                  {teamMemberData.name}
                                </Typography>
                                <Typography variant="subtitle2">
                                  {teamMemberData.title}
                                </Typography>
                              </div>
                            </Paper>
                            <Paper className={classes.teamMember_social}>
                              <Typography variant="subtitle2" align="center">
                                Email: {teamMemberData.email}
                              </Typography>
                              <Typography variant="subtitle2" align="center">
                                {teamMemberData.social &&
                                teamMemberData.social.facebook ? (
                                  <>
                                    <a
                                      href={teamMemberData.social.facebook}
                                      className={classes.anchor}
                                    >
                                      <FacebookIcon className={classes.socialIcon} />
                                    </a>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {teamMemberData.social &&
                                teamMemberData.social.linkedIn ? (
                                  <>
                                    <a
                                      href={teamMemberData.social.linkedIn}
                                      className={classes.anchor}
                                    >
                                      <LinkedInIcon className={classes.socialIcon} />
                                    </a>
                                  </>
                                ) : (
                                  <></>
                                )}
                                {teamMemberData.social &&
                                teamMemberData.social.twitter ? (
                                  <a
                                    href={teamMemberData.social.twitter}
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
