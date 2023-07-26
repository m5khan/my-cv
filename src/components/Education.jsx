import React from 'react';
import { Avatar, Grid, Typography, Box } from '@material-ui/core';

const Education = (props) => {
    return (
        <Grid container justify="space-between" alignItems="flex-start" >
            <Grid item xs={12} style={{ marginBottom: 10 }}>
                <EduCard {...props.ms}/>
            </Grid>
            <Grid item xs={12}>
                <EduCard {...props.bs}/>
            </Grid>
        </Grid>
    );
}

const EduCard = (props) => {
    return (
        <Grid container alignItems="center">
            <Grid item xs={3}>
                <Avatar style={props.size ? {width: '30px', height: '30px'} : {}} variant="square" src={props.image}></Avatar>
            </Grid>
            <Grid item xs={9}>
                <Box display="flex" justifyContent="space-between" alignItems="baseline">
                    <Typography variant="body2" component="p">{props.title}</Typography>
                    <Typography component="p" variant="caption" color="textSecondary">{props.duration}</Typography>                    
                </Box>
                <Typography variant="subtitle2" component="p" color="textSecondary">{props.uni}</Typography>
                <Typography variant="caption" color="textSecondary">{props.text}</Typography>
            </Grid>
        </Grid>
    )
}

export default Education;