import React from 'react';
import styled from 'styled-components';
import { Grid, Divider, Paper, Typography } from '@material-ui/core';

import Header from './Header';
import Spacing from './Spacing';
import Experience from './Experience';

import ResumeData from '../Resume.json';


const Resume = () => {
    return (
        <>
        <Header></Header>
        <Spacing height={15}/>
        <Typography variant="h6">Work Experience</Typography>
        <Paper variant="outlined" square style={{padding: '10px'}}>
        <Experience {...ResumeData.work[0]}/>
        <Spacing height={10}/>
        <Experience {...ResumeData.work[1]}/>
        <Spacing height={10}/>
        <Experience {...ResumeData.work[2]}/>
        <Spacing height={10}/>
        <Experience {...ResumeData.work[3]}/>
        <Spacing height={10}/>
        <Experience {...ResumeData.work[4]}/>
        </Paper>
        </>
    )
}

export default Resume;