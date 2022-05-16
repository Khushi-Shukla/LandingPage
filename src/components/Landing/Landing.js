import { Box, Button, FormControl, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Landing = () => {
  return (
      <Box>
        <Header />
        <Box 
            sx={{height:'30rem', p:'1rem',
                background:"linear-gradient(to right bottom, #2923ac, #2454cd, #2064dc, #206cdc)", 
                borderRadius:'0 0 50% 50% / 100px',
                maxWidth: '100%'}}
            >
            {/* <Box sx={{mt:'1rem'}}/> */}
            <Box 
                sx={{mt:'5rem', 
                borderRadius:'1rem',
                background:"#f0f8fa", 
                width:"16%",
                p:2,
                pt:1, 
                ml:"auto", 
                mr:"auto"
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
              <Button sx={{m:1}} variant="contained">Send OTP</Button>
              <br/>
              <Typography variant="caption">Already Registered?
                  <br/>
                  <Button variant="text">Sign in</Button>
              </Typography>
            </Box>
        </Box>
        <Footer />
      </Box>
      
  )
}

export default Landing