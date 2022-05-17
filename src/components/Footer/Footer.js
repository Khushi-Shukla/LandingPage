import React from 'react'
import { 
        Grid, 
        Box, 
        Typography, 
        List, 
        ListItemButton, 
        ListItemText, 
        IconButton, 
        Divider, 
        Paper, 
        InputBase 
    } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Footer.css';


const Footer = () => {
  return (
    <Box className="footer" sx={{ width: "100%", color:"white" }}>
      <Box className="footer-content" sx={{display: "flex", flexWrap:"wrap", justifyContent:"space-around"}}>
        <Box sx={{mt:2}}>
          <img src='/images/logo.png' height="200" alt="logo" />
        </Box>
        <Box sx={{ mt: 2, ml: 2 }}>
            <Typography sx={{textAlign: 'left'}}  variant='body2'>Quick Links</Typography> 
               <List>
                  <ListItemButton>
                   {/* <Link to="/"> */}
                    <ListItemText primary="About Us"/>
                      {/* </Link> */}
                  </ListItemButton>        

                  <ListItemButton>
                   {/* <Link to="/"> */}
                    <ListItemText primary="Blogs"/>
                   {/* </Link> */}
                  </ListItemButton>
                            
               </List>
        </Box>

        <Box
        sx={{mt:2}}
        >
        <Typography sx={{ float: "left" }} variant="body2">
                    Contact
                  </Typography>
                  <br />
                  {/* icons */}
                  <a href="/">
                    <Box sx={{ mt: 2}}>
                      <CallIcon sx={{ position: 'absolute'}}/>
                      <Typography variant='caption' sx={{color:'white', textDecoration:"none", ml: 4}}>
                      Contact Us
                      </Typography>
                    </Box>
                  </a>
                  <a href="/">
                    <Box sx={{ mt: 2}}>
                      <EmailIcon sx={{position: 'absolute'}}/>
                      <Typography variant='caption' sx={{color:'white', textDecoration:"none", ml: 4}}>
                        Careers
                      </Typography>
                    </Box>
                  </a>
                
        </Box>

        <Box
         sx={{textAlign: 'left', mt: 2, mb: 2, display:"flex", flexDirection:"column"}}
        > 
        <Typography color="white" variant="body"> Social Media  </Typography>
                    {/* social media icons */}
                    <IconButton >
                      <FacebookIcon id="fb" className='icons' /> 
                      <Typography color="white" fontWeight="bold" variant="caption">Facebook </Typography>
                    </IconButton>
                    <IconButton>
                      <LinkedInIcon id="linkedin" className='icons' /> 
                      <Typography color="white" fontWeight="bold" variant="caption">LinkedIn</Typography>
                    </IconButton>
                    <IconButton>
                      <InstagramIcon id="ig-icon" className='icons'  /> 
                      <Typography color="white" fontWeight="bold" variant="caption">Instagram</Typography>
                    </IconButton>
                    
                    <IconButton>
                      <YouTubeIcon id="youtube" className='icons' /> 
                      <Typography color="white" fontWeight="bold" variant="caption">YouTube</Typography>
                    </IconButton>
                            
                </Box>
      </Box>
      <Box>
        <Divider />
        {/* <Copyright /> */}
      </Box>
    </Box>
  );
};

export default Footer;