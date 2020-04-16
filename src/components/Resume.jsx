import React from 'react';
import styled from 'styled-components';
import { Grid, Divider, Paper, Typography } from '@material-ui/core';

import Header from './Header';
import Spacing from './Spacing';
import Experience from './Experience';
import SecondSection from './SecondSection';
import Skills from './Skills';
import Education from './Education';

import ResumeData from '../Resume.json';


const Resume = () => {
    return (
        <>
        <Header></Header>
        <Spacing height={15}/>
        <Typography variant="subtitle1">Work Experience</Typography>
        <Paper variant="outlined" square style={{padding: '20px'}}>
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

        <Spacing height={10}/>
        <Typography variant="subtitle1">Tech Skills</Typography>
        {/* <SecondSection /> */}
        <Skills skills={ResumeData.skills} skillsSecondary={ResumeData.skillsSecondary}/>

        <Spacing height={10}/>
        <Typography variant="subtitle1">Education</Typography>
        <Paper variant="outlined" square style={{padding: '20px'}}>
            <Education ms={ResumeData.education.MS} bs={ResumeData.education.BS} />
        </Paper>

        <Typography variant="subtitle1">Languages</Typography>
        <Typography variant="body2" color="textSecondary">German - B 1.1</Typography>
        <Typography variant="body2" color="textSecondary">English - Fluent</Typography>
        </>
    )
}

export default Resume;