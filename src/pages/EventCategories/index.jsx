import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './eventCategories.style';

import eventCategorySample from "../../assets/SVGs/eventCategorySample.svg";

const EventCategories = () => {
    const classes = useStyles()
    return <Container>
        <Typography variant='h2'>Event Category</Typography>
        <Grid container>
            <Grid item md={3} xs={12}>
                <Paper className={classes.categoryPaper} >
                    <img src={eventCategorySample} alt='event Category' />
                    <Typography textAlign={'center'} variant='h4' style={{ color: '#fff' }}>
                        Robotics Events
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    </Container>;
};

export default EventCategories;