import React from 'react';
import styled from 'styled-components';
import RoomIcon from '@material-ui/icons/Room';
import { Box, Divider, Grid, Paper, Typography } from '@material-ui/core';


// const experience = {
//     company: "censhare AG",
//     title: "working student",
//     duration: "Oct 2018 - March 2020 (1.3 Years)",
//     location: "Munich, Germany",
//     content: [
//         "Develop and taking ownership of an in-house product; A code snippets management solution developed for internal team following complete SDCL.",
//         "Web application development with angular 8, Node.js, typescript and censhare Headless CMS.",
//         "Supporting the solution's development team in achieving the requirements of the client by working on product customization."
//     ]
// }

const Experience = (props) => {
    return (
        <>
            <Grid container justify="space-between" alignItems="flex-end">
                <Grid xs={7}>
                    <Typography variant="caption" color="primary" component="p">{props.company}</Typography>
                    <Typography variant="subtitle2" color="textPrimary" component="span">{props.title}</Typography>
                    <Typography style={{paddingLeft: '8px'}} align="right" variant="caption" component="span" color="textSecondary"><RoomIcon style={{verticalAlign: "text-bottom"}} color="disabled" fontSize="small"></RoomIcon>{props.location}</Typography>
                </Grid>
                <Grid xs={5}>
                    <Typography align="right" variant="caption" component="p" color="textPrimary">{props.duration}</Typography>
                </Grid>
            </Grid>
            <Box>
                {contents(props.content)}
            </Box>
        </>
    )
}

const contents = (c) => {
    return c.map((i, id) => <Typography key={id} align="justify" variant="caption" color="textSecondary" component="p">{i}</Typography>);
}

export default Experience;