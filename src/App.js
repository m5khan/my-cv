import React from 'react';
import styled from 'styled-components';
import Resume from './components/Resume';

const CvPage = styled.div`
  width: 21cm;
  height: 29.7cm;
  background-color: #f8f8f8;
`;

function App() {
  return (
    <>
    <CvPage>
      <div style={{padding: '20px'}}>
        <Resume />
      </div>
    </CvPage>
    </>
  );
}

export default App;
