import React from 'react'
import { AppBar, Typography, Menu, MenuItem, Container, Box, IconButton, Toolbar, Modal, Button, Stack, Autocomplete, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Home from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LoginIcon from '@mui/icons-material/Login';
import ArticleIcon from '@mui/icons-material/Article';
import './Header.css'

const HeaderItems=()=>{
    return (
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection:"column" }}>
            <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                        mr: 2,
                        display: { xs: 'flex' },
                        
                        }}
                    >
                    <img src="/images/logo.png" alt="logo" height="80" />
                </Typography>        
                
        <Autocomplete 
                    id="choose-location"
                    options={locations}
                    sx={{ width: 250, m:2, display: { xs: 'flex' } }}
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
                    sx={{ width: 250, m:2, display: { xs: 'flex' } }}
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
                <Box sx={{display:  'flex' , flexDirection:"column" }}>
                    <IconButton sx={{m:'1rem', mr:"auto"}} className='icon'>
                        {/* <Stack alignItems="center"> */}
                            <Home />
                            <Typography variant="caption" >Home</Typography>
                        {/* </Stack> */}
                    </IconButton>

                    <IconButton sx={{m:'1rem',mr:"auto"}} className='icon'>
                        {/* <Stack alignItems="center"> */}
                            <LocalHospitalIcon />
                            <Typography variant="caption" >Clinics</Typography>
                        {/* </Stack> */}
                    </IconButton>

                    
                    <IconButton sx={{m:'1rem', mr:"auto"}} className='icon'>
                        {/* <Stack alignItems="center"> */}
                            <ArticleIcon />
                            <Typography variant="caption" >Blogs</Typography>
                        {/* </Stack> */}
                    </IconButton>
                    
                    <IconButton sx={{m:'1rem', mr:"auto"}} className='icon'>
                        {/* <Stack alignItems="center"> */}
                            <LoginIcon />
                            <Typography variant="caption" >Sign-in</Typography>
                        {/* </Stack> */}
                    </IconButton>

                    <Button variant="text" sx={{color:"black", mr:"auto"}} className='icon'>
                        <Typography variant="body" >Are you a Doctor?</Typography>
                    </Button>
                </Box>

    </Box>
    );
}


const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  return (
    <Box sx={{flexGrow: 1}}>
        <AppBar sx={{bgcolor:"#f4f2f2"}}>
            <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon  />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => ( */}
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Box><HeaderItems /></Box>
                </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
            
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        
                        }}
                    >
                    <img src="/images/logo.png" alt="logo" height="80" />
                </Typography>        
                
        <Autocomplete 
                    id="choose-location"
                    options={locations}
                    sx={{ width: 250,  display: { xs: 'none', md: 'flex' } }}
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
                    sx={{ width: 250, m:2, display: { xs: 'none', md: 'flex' } }}
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
                <Box sx={{display: { xs: 'none', md: 'flex' } }}>
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

            {/* </Toolbar> */}
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