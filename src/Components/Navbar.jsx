import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Link, Outlet } from 'react-router-dom';
import { BottomNavigation, CssBaseline, Paper } from '@mui/material';

import image from './Credit_Card.png'

const Navbar = () => {

let [ activeState , setActionState ] = React.useState('');

  return (
    <div style={{ margin: '10px' }}>


      <AppBar position="static" sx={{ borderRadius: '10px', background: '#002746' }}>


        <Container maxWidth="l">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

            <Box     to='/'>
            <Link to='/'>
              <img src={image} alt="" width={50} height={50} />
            </Link>
            
            </Box>


            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, alignItems: 'center', marginLeft: '20px' }}>

              <Button
                to='/'
            
                sx={{ my: 2, display: 'block', fontSize: '15px', lineHeight: '18px', textAlign: 'center', fontWeight: '700px', textTransform: "capitalize" , fontFamily : 'Roboto' }}
              >
                <Link style={{color: '#FFFFFF' , textDecoration : 'none' ,  fontWeight : '700'}} to='/'>

                Credit Card   <br />

                Management
                </Link>
              </Button>
              <Button sx={{ my: 2, color: 'black', display: 'block', color: '#00B1B0', textDecoration: 'underline', textTransform: "capitalize", padding: '0  40px 0 40px' , fontFamily : '' , fontWeight : '700' }}
              >

                <Link style={{ color: '#00B1B0' }}
                  to='/'
                >
                  Credit Card

                  Management
                </Link>
              </Button>
              <Button
                sx={{ my: 2, color: 'black', display: 'block', color: '#FFFFFF', textTransform: "capitalize" , fontWeight : '700' }}
              >

                <Link style={{ color: '#FFFFFF', textDecoration: 'none' }}
                  to='/SpendingProfile'

                  sx={{ my: 2, color: 'black', display: 'block', color: '#FFFFFF', textTransform: "capitalize" }}
                >
                  Spending Profiles
                </Link>
              </Button>

            </Box>

            <Box sx={{ flexGrow: 0 }}>

              <IconButton sx={{ p: 0, alignItems: 'center' }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ marginRight: '10px' }} />
                <Typography sx={{ color: '#ffffff', fontWeight: '500' }}>Rachel Becker</Typography>
              </IconButton>
       
            </Box>
          </Toolbar>
        </Container>

      </AppBar>

      <Box sx={{ pb: 7 }} >
      {/* <CssBaseline /> */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={0}>

        <BottomNavigation
     
      
          >
            <Typography  sx={{textAlign : 'center' , display : 'flex', alignItems : 'center'  ,  justifyContent: 'center'}}>
              ©  Copyright 2024, Credit Card Management
    
            </Typography>
        </BottomNavigation>
      </Paper>
    </Box>
      <Outlet />

    </div>
  );
}




export default Navbar;