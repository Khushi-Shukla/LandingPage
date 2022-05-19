import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Box, Button, FormControl, IconButton, TextField, Typography } from '@mui/material'
import './NewRegister.css'

function NewRegister() {
  return (
    <Box>
        <Header />
        <Box sx={{mt:"5rem", pt:"5rem"}} className='curve'>
            <Box sx={{width:"50%"}}>
            <Typography color="white" fontFamily={"cursive"} sx={{pl:"2rem", display:"flex", justifyContent:"flex-start"}} variant='h5'>
            Grow Your <Typography fontFamily={"cursive"} variant='h5' color="orange">  VIRTUAL PRESENCE</Typography></Typography>
            <Typography color="white" fontFamily={"cursive"} align='left' sx={{pl:"2rem", display:"flex", justifyContent:"flex-start"}} variant='h6'>Make Your WEBPAGE In 10 Minutes<br/>
            Maintenance free No technical knowledge requirement</Typography>
           <br/><Typography  fontFamily={"cursive"} align='left' sx={{pl:"2rem", mt:'-1rem'}} variant='h6' color="orange">(Exclusive Platform for Dentist Only)</Typography>
           
        </Box>
        <Box 
                sx={{
                mt:"-10rem",
                borderRadius:'1rem',
                background:"#f0f8fa", 
                width:"16%",
                p:2,
                mr:38, 
               ml:"auto",
               mb:-19
            }}
                >
                
                <Typography  variant="h5">Register Today</Typography>
                <TextField 
                    sx={{m:1}}
                    id="standard-basic" 
                    label="Name" 
                    variant="standard" 
                    />
   
                <TextField
                    id="standard-basic" 
                    sx={{m:1}}
                    label="Mobile Number" 
                    variant="standard" 
                    />
              <Button sx={{m:1, mb:0}} variant="contained">Send OTP</Button>
              <br/>
              <Typography variant="caption">Already Registered?
                  <br/>
                  <Button variant="text">Sign in</Button>
              </Typography>
            </Box>   
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L40,112C80,128,160,160,240,160C320,160,400,128,480,122.7C560,117,640,139,720,176C800,213,880,267,960,266.7C1040,267,1120,213,1200,208C1280,203,1360,245,1400,266.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>  </Box>
{/* </Box> */}
        <Footer />

       
    </Box>
    
  )
}

export default NewRegister