import React from 'react';
import styled from 'styled-components';
import { Avatar, Box, Grid, Icon, Link, Typography } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RoomIcon from '@material-ui/icons/Room';

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
        <Grid style={{padding: "0 20px"}} container justify="space-between" alignItems="flex-start">
            <Grid item xs={1.5}>
                <Avatar style={{width: '90px', height:'90px', marginTop:'7px'}} alt="Shoaib Khan" src={'shoaib6.png'} />
            </Grid>
            <Grid item xs={6.5}>
                <Box>
                <Typography variant="h5">SHOAIB KHAN</Typography>
                <Box display="flex" style={{ marginTop: '4px' }}>
                    <RoomIcon color="action" style={{verticalAlign: 'top', paddingRight: '5px'}} fontSize="small" />
                    <Typography variant="body2" color="textSecondary">Cologne, Germany</Typography>
                </Box>
                {/* <SBox>
                    <MailIcon color="action" style={{verticalAlign: 'top', paddingRight: '10px'}} fontSize="small"></MailIcon><Typography variant="body2" component="span"><Link color="textSecondary" href="mailto:mshoaib.khan@tum.de">mshoaib.khan@tum.de</Link></Typography>
                </SBox>
                <SBox>
                    <PhoneIcon color="action" style={{verticalAlign: 'top', paddingRight: '10px'}} fontSize="small"></PhoneIcon><Typography color="textSecondary" paragraph variant="body2" component="span">+49 176 6720 7947</Typography>
                </SBox> */}
                <Box maxWidth="370px" style={{ marginTop: '10px' }}>
                    {/* <Typography style={{ fontSize: '11px' }} component="p" color="textSecondary">Software developer specialized in Web with a conscious mind for writing scalable and maintainable code, and providing attention to details</Typography> */}
                    {/* <Typography style={{ fontSize: '11px' }} component="p" color="textSecondary">Full-stack developer with a conscious mind for writing scalable and maintainable code and providing attention to details</Typography> */}
                    <Typography style={{ fontSize: '11px' }} component="p" color="textSecondary">Full-stack web developer with more than six years of experience in both front-end and back-end technologies and providing solutions</Typography>
                </Box>
                </Box>
            </Grid>
            <Grid item xs={3.5}>
                <SBox>
                    <MailIcon color="action" style={{verticalAlign: 'top', paddingRight: '10px'}} fontSize="small"></MailIcon><Typography variant="body2" component="span"><Link color="textSecondary" href="mailto:mshoaibkhan91@gmail.com">mshoaibkhan91@gmail.com</Link></Typography>
                </SBox>
                <SBox>
                    <PhoneIcon color="action" style={{verticalAlign: 'top', paddingRight: '10px'}} fontSize="small"></PhoneIcon><Typography color="textSecondary" paragraph variant="body2" component="span">+49 176 6720 7947</Typography>
                </SBox>
                <SBox>
                <GitHubIcon color="action" style={{verticalAlign: 'top', paddingRight: '10px'}} fontSize="small"></GitHubIcon><Typography variant="body2" component="span"><Link color="textSecondary" href="https://github.com/m5khan">Github/m5khan</Link></Typography>
                </SBox>
                <SBox>
                <LinkedInIcon color="action" style={{verticalAlign: 'top', paddingRight: '10px'}} fontSize="small"></LinkedInIcon><Typography variant="body2" component="span"><Link color="textSecondary" href="https://www.linkedin.com/in/m5khan">linkedin.com/in/m5khan</Link></Typography>
                </SBox>
            </Grid>
        </Grid>
        <Grid container justify="space-between" style={{marginTop:'15px'}}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                {/* <Typography align="center" component="p" variant="caption">Passionate Software Engineer with a demonstrated history of working in tech startups and mid-sized companies. Team player, creative and amused by challenging myself.</Typography> */}
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
        </>
    )
}

export default Header;