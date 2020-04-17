import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Language = () => {
    return (
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="body2" component="span">English</Typography>
            <Typography style={{paddingLeft: '10px'}} variant="body2" component="span" color="textSecondary">C2</Typography>
            <Typography variant="caption" color="textSecondary" component="p">Full Professional Proficiency</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" component="span">German</Typography>
            <Typography style={{paddingLeft: '10px'}} variant="body2" component="span" color="textSecondary">B1.1</Typography>
            <Typography variant="caption" color="textSecondary" component="p">Basic intermediate – can hold casual conversations</Typography>
          </Grid>
        </Grid>
    )
}

export default Language;