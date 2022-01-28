import { Container, Grid, Typography, Card, Paper } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import { TeamsLogic } from './Team.js'
import { useStyles } from './teams.style.js'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import EmailIcon from '@mui/icons-material/Email'

export default function Team () {
  const { teamData } = TeamsLogic()
  const classes = useStyles()
  return (
    <Container>
      {teamData &&
        teamData.team &&
        teamData.team.map((item, index) => {
          let expand = false;
          expand =  (index === 0 || index === 1) 
          console.log(expand, index)
          return (
            <div key={index}>
              <Accordion style={{ background: '#fff0' }} defaultExpanded={expand} TransitionProps={{ unmountOnExit: true }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon fontSize='large' style={{ color: '#fff' }} />}
                  aria-controls='panel1a-content'
                  id={index}
                >
                  <Typography variant='h2' color='primary'>
                    {item.categoryName}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                                    backgroundPosition: 'center'
                                  }}
                                  className={classes.teamMember_image}
                                >
                                  <div className={classes.teamMember_name}>
                                    <Typography variant='h5'>
                                      {teamMemberData.name}
                                    </Typography>
                                    <Typography variant='subtitle2'>
                                      {teamMemberData.title}
                                    </Typography>
                                  </div>
                                </Paper>
                                <Paper className={classes.teamMember_social}>
                                  <Typography variant='subtitle2' align='center'>
                                    <a href={`mailto:${teamMemberData.email}`} className={classes.anchor}>
                                      <EmailIcon className={classes.socialIcon} />
                                    </a>

                                    {teamMemberData.social &&
                                    teamMemberData.social.facebook
                                      ? (
                                        <>
                                          <a
                                            target='_blank'
                                            href={teamMemberData.social.facebook}
                                            className={classes.anchor} rel='noreferrer'
                                          >
                                            <FacebookIcon className={classes.socialIcon} />
                                          </a>
                                        </>
                                        )
                                      : (
                                        <></>
                                        )}
                                    {teamMemberData.social &&
                                    teamMemberData.social.linkedIn
                                      ? (
                                        <>
                                          <a
                                            target='_blank'
                                            href={teamMemberData.social.linkedIn}
                                            className={classes.anchor} rel='noreferrer'
                                          >
                                            <LinkedInIcon className={classes.socialIcon} />
                                          </a>
                                        </>
                                        )
                                      : (
                                        <></>
                                        )}
                                    {teamMemberData.social &&
                                    teamMemberData.social.twitter
                                      ? (
                                        <a
                                          target='_blank'
                                          href={teamMemberData.social.twitter}
                                          className={classes.anchor} rel='noreferrer'
                                        >
                                          <TwitterIcon className={classes.socialIcon} />
                                        </a>
                                        )
                                      : (
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
                </AccordionDetails>
              </Accordion>
            </div>
          )
        })}
    </Container>
  )
}
