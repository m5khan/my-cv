import React from 'react';
import styled from 'styled-components';
import { Box, Divider, Grid, Paper, Typography } from '@material-ui/core';

const SecondSection = () => {
    return (
        <Grid container justify="space-between" alignItems="flex-start" spacing={3}>
            <Grid item xs={4}>
                <Paper variant="outlined" square>hello</Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper variant="outlined" square>hello</Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper variant="outlined" square>hello</Paper>
            </Grid>
        </Grid>
    );
}

export default SecondSection;