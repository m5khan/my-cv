import React from 'react';
import styled from 'styled-components';
import {Box} from '@material-ui/core';

const SBox = styled(Box)`
    height: ${props => props.height}px; 
`;

const Spacing = (props) => {
    return (
        <SBox {...props}></SBox>
    )
}

export default Spacing;