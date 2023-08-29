import React from 'react';
import styled from 'styled-components';
import RoomIcon from '@material-ui/icons/Room';
import { Box, Divider, Grid, Paper, Typography } from '@material-ui/core';
import { LineWeight } from '@material-ui/icons';


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
            <Grid container justify="space-between" alignItems="center">
                <Grid item xs={7}>
                    <Typography variant="caption" color="primary" component="p">{props.company}</Typography>
                    <Typography variant="subtitle2" color="textPrimary" component="span">{props.title}</Typography>
                    <Typography style={{paddingLeft: '6px'}} align="right" variant="caption" component="span" color="textSecondary"><RoomIcon style={{verticalAlign: "text-bottom", fontSize: '16px'}} color="disabled" fontSize="small"></RoomIcon>{props.location}</Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography align="right" variant="caption" component="p" color="textPrimary">{props.duration}</Typography>
                </Grid>
            </Grid>
            <ul style={{
                paddingInlineStart: '16px',
                color: "#75828b",
                lineHeight: '0px',
                textAlign: 'justify',
                margin: '9px 0',
             }}>
                {contents(props.content)}
            </ul>
        </>
    )
}

const contents = (c) => {
    return c.map((i, id) => (
        <li key={id}>
            <Typography key={id} align="justify" variant="caption" color="textSecondary">{i}</Typography>
        </li>
    ));
}

export default Experience;