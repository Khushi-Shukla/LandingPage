import React from 'react'
import { AppBar, Typography, Container, Box, IconButton, Toolbar, Modal, Button, Stack, Autocomplete, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Home from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LoginIcon from '@mui/icons-material/Login';
import ArticleIcon from '@mui/icons-material/Article';
import './Header.css'

const Header = () => {
 
  return (
    <Box sx={{flexGrow: 1}}>
        <AppBar sx={{bgcolor:"#f4f2f2"}}>
            <Toolbar>
                <IconButton
                    className='icon'
                    size="large"
                    edge="start"
                    color="default"
                    aria-label="open drawer"
                    sx={{ mr:5, justifyContent:'left',  display: { xs: 'flex', md: 'none' } }}
                    >
                    <MenuIcon />
                </IconButton>
            
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'blue',
                        textDecoration: 'none',
                        }}
                    >
                    LOGO
                </Typography>        
                <Autocomplete 
                    id="choose-location"
                    options={locations}
                    sx={{ width: 250,  display: { sm: 'none', md: 'flex' } }}
                    renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Enter Locality"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                          }}
                        />
                      )}
                    />

                <Autocomplete 
                    id="choose-location"
                    options={locations}
                    sx={{ width: 250, m:2, display: { sm: 'none', md: 'flex' } }}
                    renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Choose dental speciality"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                          }}
                        />
                      )}
                    />

                <Box sx={{flexGrow: 1}} />
                <Box sx={{display: { sm: 'none', md: 'flex' } }}>
                    <IconButton sx={{m:'1rem'}} className='icon'>
                        <Stack alignItems="center">
                            <Home />
                            <Typography variant="caption" >Home</Typography>
                        </Stack>
                    </IconButton>

                    <IconButton sx={{m:'1rem'}} className='icon'>
                        <Stack alignItems="center">
                            <LocalHospitalIcon />
                            <Typography variant="caption" >Clinics</Typography>
                        </Stack>
                    </IconButton>

                    
                    <IconButton sx={{m:'1rem'}} className='icon'>
                        <Stack alignItems="center">
                            <ArticleIcon />
                            <Typography variant="caption" >Blogs</Typography>
                        </Stack>
                    </IconButton>
                    
                    <IconButton sx={{m:'1rem'}} className='icon'>
                        <Stack alignItems="center">
                            <LoginIcon />
                            <Typography variant="caption" >Sign-in</Typography>
                        </Stack>
                    </IconButton>

                    <Button variant="text" sx={{color:"black"}} className='icon'>
                        <Typography variant="body" >Are you a Doctor?</Typography>
                    </Button>
                </Box>

            </Toolbar>
            
        

        </AppBar>
      
    </Box>
  )
}

export default Header

const locations=[
    "Assam",
    "Delhi",
    "Hyderabad",
    "Arunachal"
]