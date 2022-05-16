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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Copyright from './Copyright';


const Footer = () => {
  return (
    <Box className="footer" sx={{ width: "100%" }}>
      <Box className="footer-content">
        {/* part 1 of footer */}
        <Box
          sx={{ textAlign: "left", m: 2, width: { md: "490px", lg: "920px" } }}
        >
          <Typography sx={{ float: "left" }} variant="body2">
            Contact Us
          </Typography>{" "}
          <br />
          {/* icons */}
          <a href="/">
            <Box sx={{ mt: 2}}>
              <CallIcon sx={{ position: 'absolute'}}/>
              <Typography variant='caption' sx={{color:'#d6d6d6', margin: 4}}>
                +(65) 66538065
              </Typography>
            </Box>
          </a>
          <a href="/">
            <Box sx={{ mt: 2}}>
              <EmailIcon sx={{position: 'absolute'}}/>
              <Typography variant='caption' sx={{color:'#d6d6d6', margin: 4}}>
                nivascustomer@gmail.com
              </Typography>
            </Box>
          </a>
          <a href="/">
            <Box sx={{ mt: 2}}>
              <LocationOnIcon sx={{position: 'absolute'}}/>
              <Typography variant='caption' sx={{color:'#d6d6d6', margin: 4}}>
                 Dibrugarh, Assam
              </Typography>
            </Box>
          </a>
        </Box>
        <Box sx={{ width: { md: "550px", lg: "920px" }, mt: 2 }}>
          {/* part 2 of footer */}
           <Grid container spacing={{ xs: 2, md: 4, lg: 9 }} >
              <Grid item>
                  <Typography sx={{textAlign: 'left', marginLeft: 2}}  variant='body2'>About</Typography> 
                  <List>
                    <ListItemButton>
                      {/* <Link to="/"> */}
                        <ListItemText primary="About Us"/>
                      {/* </Link> */}
                    </ListItemButton>        

                    <ListItemButton>
                      {/* <Link to="/"> */}
                        <ListItemText primary="Explore Space"/>
                      {/* </Link> */}
                    </ListItemButton>
                            
                    <ListItemButton>
                      {/* <Link to="/"> */}
                        <ListItemText primary="Home"/>
                      {/* </Link> */}
                    </ListItemButton>
                            
                  </List>
              </Grid>
                
              <Grid item>
                <Typography sx={{textAlign: 'left', ml: 2}}  variant='body2'>Corporate Training</Typography> 
                  <List>
                    <ListItemButton>
                      <ListItemText primary="Leaders"/>
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="Practioners"/>
                    </ListItemButton>
                  </List>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{textAlign: 'left', ml: 2, mt: 2, mb: 2}}>
            {/* social media icons */}
            <IconButton >
              <FacebookIcon id="fb" className='icons' />
            </IconButton>
            <IconButton>
              <LinkedInIcon id="linkedin" className='icons' />
            </IconButton>
            <IconButton>
              <TwitterIcon id="twitter" className='icons'  />
            </IconButton>
            <IconButton>
              <InstagramIcon id="ig-icon" className='icons'  />
            </IconButton>
            
            <IconButton>
              <YouTubeIcon id="youtube" className='icons' />
            </IconButton>
                     

          {/* part 3 content of footer */}
          <Typography variant="h6">Subscribe Us</Typography>
          <Typography
            variant="subtitle2"
            sx={{ textAlign: "left", color: "#d6d6d6", marginTop: 1 }}
          >
            Subscribe us to get latest updates
          </Typography>

          {/* input for email */}
          <Paper
            component="form"
            sx={{ display: "flex", width: 200, height: 30, mt: 1 }}
          >
            <InputBase placeholder="Email address" sx={{ p: 2 }} />
            <IconButton
              type="submit"
              sx={{ height: 30, backgroundColor: "#42ba96", borderRadius: 0 }}
              aria-label="search"
            >
              <ArrowForwardIcon />
            </IconButton>
          </Paper>
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