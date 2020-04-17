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
        <>
        <Grid container justify="space-between" alignItems="flex-start" spacing={4}>
            <Grid item xs={2}>
                <Avatar style={{width: '90px', height:'90px', marginTop:'7px'}} alt="Shoaib Khan" src={'shoaib2.png'} />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4">SHOAIB KHAN</Typography>
                <Typography variant="body2" color="textSecondary">Felsennelkenanger 13 // M 237</Typography>
                <Typography variant="body2" color="textSecondary">80937, Munich</Typography>
                <Typography variant="body2" color="textSecondary">Germany</Typography>
            </Grid>
            <Grid item xs={4}>
                <SBox>
                    <MailIcon color="action" style={{verticalAlign: 'top', paddingRight: '10px'}} fontSize="small"></MailIcon><Typography variant="body2" component="span"><Link color="textSecondary" href="mailto:mshoaib.khan@tum.de">mshoaib.khan@tum.de</Link></Typography>
                </SBox>
                <SBox>
                    <PhoneIcon color="action" style={{verticalAlign: 'top', paddingRight: '10px'}} fontSize="small"></PhoneIcon><Typography color="textSecondary" paragraph variant="body2" component="span">+49 176 6720 7947</Typography>
                </SBox>
                <SBox>
                <GitHubIcon color="action" style={{verticalAlign: 'top', paddingRight: '10px'}} fontSize="small"></GitHubIcon><Typography variant="body2" component="span"><Link color="textSecondary" href="https://github.com/m5khan">Github/m5khan</Link></Typography>
                </SBox>
                <SBox>
                <LinkedInIcon color="action" style={{verticalAlign: 'top', paddingRight: '10px'}} fontSize="small"></LinkedInIcon><Typography variant="body2" component="span"><Link color="textSecondary" href="https://www.linkedin.com/in/shoaib-khan-65839687/">Linkedin</Link></Typography>
                </SBox>
            </Grid>
        </Grid>
        <Grid container justify="space-between" style={{marginTop:'15px'}}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <Typography align="center" component="p" variant="caption">Passionate Software Engineer with a demonstrated history of working in tech startups and mid-sized companies. Team player, creative and amused by challenging myself.</Typography>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
        </>
    )
}

export default Header;