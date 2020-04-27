import React from 'react';

import { Box, Divider, Paper, Typography } from '@material-ui/core';

import Header from './Header';
import Spacing from './Spacing';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';

import ResumeData from '../Resume.json';


const Resume = () => {
    return (
        <>
        <Header></Header>
        <Divider />
        <Spacing height={15}/>
        <Typography variant="subtitle1">EDUCATION</Typography>
        <Paper elevation={0} square style={{padding: '10px 20px'}}>
            <Education ms={ResumeData.education.MS} bs={ResumeData.education.BS} />
        </Paper>

        <Divider />
        <Spacing height={10}/>
        <Typography variant="subtitle1">WORK EXPERIENCE</Typography>
        <Paper elevation={0} square style={{padding: '10px 20px'}}>
        <Experience {...ResumeData.work[0]}/>
        <Spacing height={9}/>
        {/* <Divider /> */}
        <Spacing height={9}/>
        <Experience {...ResumeData.work[1]}/>
        <Spacing height={9}/>
        {/* <Divider /> */}
        <Spacing height={9}/>
        <Experience {...ResumeData.work[2]}/>
        <Spacing height={9}/>
        {/* <Divider /> */}
        <Spacing height={9}/>
        <Experience {...ResumeData.work[3]}/>
        <Spacing height={9}/>
        {/* <Divider /> */}
        <Spacing height={9}/>
        <Experience {...ResumeData.work[4]}/>
        </Paper>
        <Divider />
        <Spacing height={10}/>
        <Typography variant="subtitle1">TECH SKILLS</Typography>
        <Paper elevation={0} style={{padding: '10px 20px'}}>
            <Skills skills={ResumeData.skills} skillsSecondary={ResumeData.skillsSecondary}/>
        </Paper>
        </>
    )
}

export default Resume;