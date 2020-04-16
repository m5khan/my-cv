import React from 'react';
import styled from 'styled-components';
import { Avatar, Box, Grid, Link, Typography } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const StyledGrid = styled(Grid)`
    background-color: orange;
    & .grid-item {
        background-color: red;
    }
`;

const SBox = styled(Box)`
    margin-top: 5px;
`


const Header = () => {
    return (
        
        <Grid container justify="space-between" spacing={4}>
            <Grid item xs={2}>
                <Avatar style={{width: '100%', height:'100%'}} alt="Shoaib Khan" src={'shoaib2.jpg'} />
            </Grid>
            <Grid item xs={5}>
                <Typography variant="h4">SHOAIB KHAN</Typography>
                <Typography variant="body2" color="textSecondary">Felsennelkenanger 13 // M 237</Typography>
                <Typography variant="body2" color="textSecondary">80937, Munich</Typography>
                <Typography variant="body2" color="textSecondary">Germany</Typography>
            </Grid>
            <Grid item xs={5}>
                <SBox>
                    <MailIcon style={{verticalAlign: 'top', paddingRight: '10px'}} fontSize="small"></MailIcon><Typography variant="body2" component="span"><Link color="textPrimary" href="mailto:mshoaib.khan@tum.de">mshoaib.khan@tum.de</Link></Typography>
                </SBox>
                <SBox>
                    <PhoneIcon style={{verticalAlign: 'top', paddingRight: '10px'}} fontSize="small"></PhoneIcon><Typography paragraph variant="body2" component="span">+49 176 6720 7947</Typography>
                </SBox>
                <SBox>
                <GitHubIcon style={{verticalAlign: 'top', paddingRight: '10px'}} fontSize="small"></GitHubIcon><Typography variant="body2" component="span"><Link color="textPrimary" href="https://github.com/m5khan">Github/m5khan</Link></Typography>
                </SBox>
                <SBox>
                <LinkedInIcon style={{verticalAlign: 'top', paddingRight: '10px'}} fontSize="small"></LinkedInIcon><Typography variant="body2" component="span"><Link color="textPrimary" href="https://www.linkedin.com/in/shoaib-khan-65839687/">Linkedin</Link></Typography>
                </SBox>

            </Grid>
        </Grid>
    )
}

export default Header;