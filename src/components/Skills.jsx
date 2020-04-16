import React from 'react';
import { Box, Chip } from '@material-ui/core';

const Skills = (props) => {
    return (
        <Box justifyContent="center">
            {props.skills.map(skill => <Chip size="small" style={{marginRight:'6px', marginTop: '6px'}} label={skill}></Chip>)}
            {props.skillsSecondary.map(skill => <Chip size="small" disabled variant="outlined" style={{marginRight:'6px', marginTop: '6px'}} label={skill}></Chip>)}
        </Box>
    )
}

export default Skills;