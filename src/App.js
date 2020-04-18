import React from 'react';
import styled from 'styled-components';
import { Grid, Paper, Typography } from '@material-ui/core';

import Resume from './components/Resume';
import Spacing from './components/Spacing';
import Language from './components/Language';
import Projects from './components/Projects';

import ResumeData from './Resume.json';

const CvPage = styled.div`
  width: 21cm;
  height: 29.7cm;
  background-color: #ffffff;
`;

function App() {
  return (
    <>
    <CvPage>
      <div style={{padding: '20px'}}>
        <Resume />
      </div>
    </CvPage>

    <CvPage>
      <div style={{padding: '20px'}}>
      <Spacing height={10}/>
      <Typography variant="subtitle1">LANGUAGES</Typography>
      <Paper elevation={0} square style={{padding: '10px 20px'}}>
        <Language />
      </Paper>

      <Spacing height={15}/>
      <Typography variant="subtitle1">PORTFOLIO</Typography>
      <Paper elevation={0} square style={{padding: '10px 20px'}}>
        <Projects projects={ResumeData.projects}/>
      </Paper>
      </div>
    </CvPage>
    </>
  );
}

export default App;
