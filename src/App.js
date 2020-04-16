import React from 'react';
import styled from 'styled-components';
import Resume from './components/Resume';

const CvPage = styled.div`
  width: 21cm;
  height: 29.7cm;
  background-color: white;
`;

function App() {
  return (
    <>
    <CvPage>
      <div style={{padding: '30px'}}>
        <Resume />
      </div>
    </CvPage>
    </>
  );
}

export default App;
