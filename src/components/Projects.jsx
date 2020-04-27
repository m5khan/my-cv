import React from 'react';
import { Box, Divider, Grid, Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

import Spacing from './Spacing';


const Projects = (props) => {
    return (
        <>
        {
            props.projects.map((p, i) => (
                <Box key={i}>
                    <Project {...p}/>
                    {i +1 !== props.projects.length ? <>
                    <Spacing height={8}/>
                    {/* <Divider /> */}
                    <Spacing height={8} />
                    </> : ''} 
                </Box>
            ))
        }
        </>
    )   
}

const Project = (props) => {
    return (
        <>
        <Grid container alignItems="center">
            <Grid item xs={11}>
                <Typography variant="subtitle2">{props.name}</Typography>
                <Box>
                    <Typography component="p" align="justify" variant="caption" color="textSecondary">
                        {props.detail}
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={1}>
                {
                    props.githubLink ?
                    <Box padding={1} textAlign="right">
                        <Link href={props.githubLink} target="_blank" rel="noopener">
                            <GitHubIcon fontSize="small"color="action"></GitHubIcon>
                        </Link>
                    </Box>
                 : ''
                 }
                 {
                    props.webLink ? 
                    <Box padding={1} textAlign="right">
                        <Link href={props.webLink} target="_blank" rel="noopener">
                            <LanguageIcon fontSize="small" color="action"></LanguageIcon>
                        </Link>
                    </Box>
                    : ""
                 }
            </Grid>
        </Grid>
        </>
    );
}

export default Projects;