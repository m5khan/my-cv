import React from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core';

const Education = (props) => {
    return (
        <Grid container justify="space-between" alignItems="flex-start" >
            <Grid item xs={6}>
                <EduCard {...props.ms}/>
            </Grid>
            <Grid item xs={6}>
                <EduCard {...props.bs}/>
            </Grid>
        </Grid>
    );
}

const EduCard = (props) => {
    return (
        <Grid container alignItems="center">
            <Grid item xs={2}>
                <Avatar style={props.size ? {width: '30px', height: '30px'} : {}} variant="square" src={props.image}></Avatar>
            </Grid>
            <Grid item xs={10}>
                <Grid container justify="space-between" alignItems="flex-end">
                    <Grid item xs={7}>
                    <Typography variant="body2" component="p">{props.title}</Typography>
                    </Grid>
                    <Grid item xs={5}>
                    <Typography component="p" variant="caption" color="textSecondary">{props.duration}</Typography>
                    </Grid>
                </Grid>
                <Typography variant="subtitle1" component="p" color="textSecondary">{props.uni}</Typography>
                <Typography variant="caption" color="textSecondary">{props.text}</Typography>
            </Grid>
        </Grid>
    )
}

export default Education;