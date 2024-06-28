import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { BottomNavigation, BottomNavigationAction, Button, CssBaseline, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, alpha, tableCellClasses } from '@mui/material';
import { CenterFocusStrong, Search } from '@mui/icons-material';

import SearchIcon from '@mui/icons-material/Search';

import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import RestoreIcon from '@mui/icons-material/Restore';

import { useEffect } from 'react';



import {AxiosInstance} from '../Axios/AxiosInstance';


const CreditCardManagement = () =>{

  let [ userData ,  setUserData] = React.useState([])

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    height : '60px',
    display : 'flex',
    alignItems : 'center',


  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '85%',
    position: 'absolute',
    right : 0,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width : '30px',
    margin : '10px 5px'
   
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    left : '-20px',
    width: '100%', 
    textAlign : 'center',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '100%',
        '&:focus': {
          width: '100%',
        },
      },
    },
    
  }));
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#ffffff',
    },

  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#dbdbdb',
    },
    '&:nth-of-type(even)': {
        backgroundColor: '#F6F6F6',
      },
      '&:last-child tr': {
        borderBottom: '0px',

      },

  }));

 useEffect(()=>{
    fetchData();
}, [])

 async function fetchData(){
       let response = await AxiosInstance.get("/" , { headers : {
        'Content-Type' : 'Application/json'
      }});
       setUserData(response.data);


  }

  const [searchItems, setSearchItems] = React.useState("");
  const handleSearch = (e) => {
    setSearchItems(e.target.value);
  };

  const filterData = userData.filter((element) => {
    return (
      element.username.toLowerCase().includes(searchItems.toLowerCase()) ||
      element.email.toLowerCase().includes(searchItems.toLowerCase()) ||
      element.department.toLowerCase().includes(searchItems.toLowerCase()) ||
      element.profile.toLowerCase().includes(searchItems.toLowerCase())
    );
  });



  console.log(filterData)


  return(
 
    <>
    <Box sx={{ flexGrow: 1 , background : '' , textAlign : 'start' , padding : '0 80px 0 80px' , margin : '40px 0 40px 0'}}>
    <Grid container spacing={2}>
      <Grid item xs={6} md={6} >
        <Typography sx={{ color : '#181623' , fontWeight : '700' , fontFamily : 'Roboto' , fontSize : '17px'}}>New Card Requests 
            {/* <span style={{ background : '#0D554A' , borderRadius : '50%' , height: '35px' , width : '35px'}}>7</span> */}
           </Typography>
      </Grid>
  

      <Grid item xs={6} md={6} sx={{textAlign : 'end'}}>
        <Button variant="contained" sx={{ color : '#FFFFFF' , fontWeight : '500' , fontSize : '13px' , background : '#0069BF' , padding : '8px 13px 8px 13px' , textTransform: "capitalize"}}>
        View Requests 
        </Button>
      </Grid>
    </Grid>
  </Box>
    
  <Box sx={{ flexGrow: 1 , background : '' , textAlign : 'start' , padding : '0 80px 0 80px' , margin : '40px 0 40px 0'}}>
  <Grid container spacing={2}>
      <Grid item xs={12} md={12} >
        <Typography sx={{ color : '#181623' , fontWeight : '700' , fontFamily : 'Roboto' , fontSize : '17px'}}>Search All Users</Typography>
      </Grid>


      <Grid item xs={12} md={12} >
      <Search sx={{background : '#FFFFFF' , border : '1px solid #909090' , borderRadius : '10px'}}>
            <SearchIconWrapper sx={{ background : '#0069BF' , borderRadius : '10px' , color : '#ffffff'}}>
              <SearchIcon  />
            </SearchIconWrapper>
            <StyledInputBase sx={{textAlign : ''}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}                                                                                             
            />
          </Search>
   
      </Grid>


      </Grid>

      <Grid container spacing={1} >
      <Grid item xs={12} md={12} sx={{marginTop : '15px' , marginBottom : '15px'}}>
        <Typography sx={{ color : '#6A6A6A' , fontWeight : '500' , fontFamily : 'Roboto' , fontSize : '17px' , position : 'relative',left : '30px' }}>Found 5 users</Typography>
      </Grid>

      </Grid>
     
      <Box sx={{ height: 520, width: '100%' }}>
 
 {

    searchItems &&  

      <TableContainer component={Paper} sx={{borderRadius : '10px' }}>
      <Table sx={{ minWidth: 650 ,  border : '1px solid #DBDBDB'}} aria-label="simple table">

        <TableHead>
          <TableRow >
            <StyledTableCell sx={{color : '#181623'  ,fontSize : '16px' , fontweight : '500' ,   borderBottom: '1px solid #c2c2c2' }}>User</StyledTableCell>
            <StyledTableCell align="" sx={{color : '#181623' , fontWeight : '500' ,fontSize : '16px' , borderLeft : '1px solid #c2c2c2' ,   borderBottom: '1px solid #c2c2c2'}}>Email</StyledTableCell>
            <StyledTableCell align="" sx={{color : '#181623' , fontWeight : '500' ,fontSize : '16px' , borderLeft : '1px solid #c2c2c2' ,   borderBottom: '1px solid #c2c2c2'}}>Department</StyledTableCell>
            <StyledTableCell align="" sx={{color : '#181623' , fontWeight : '500' ,fontSize : '16px',  borderLeft : '1px solid #c2c2c2' ,  borderBottom: '1px solid #c2c2c2' }}>Spending Profile</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            {
                filterData.map((el)=>{
                    return(

        <StyledTableRow key={el.username}>

        <StyledTableCell component="th" scope="row"  sx={{fontWeight : '400' , fontSize : '14px' , borderBottom :'1px solid #c2c2c2'}}>
          {el.username}
        </StyledTableCell>
        <StyledTableCell align="" sx={{fontWeight : '400' , fontSize : '14px' ,   borderLeft : '1px solid #c2c2c2' , borderBottom :'1px solid #c2c2c2'}}>{el.email}</StyledTableCell>
        <StyledTableCell align=""  sx={{fontWeight : '400' , fontSize : '14px' ,  borderLeft : '1px solid #c2c2c2' ,  borderBottom :'1px solid #c2c2c2'}}>{el.department}</StyledTableCell>
        <StyledTableCell align=""  sx={{fontWeight : '400' , fontSize : '14px' ,  borderLeft : '1px solid #c2c2c2',  borderBottom :'1px solid #c2c2c2'}}>{el.profile}</StyledTableCell>
        </StyledTableRow>
                    )
                })
            }
        </TableBody>
      </Table>
    </TableContainer> 
 }
    </Box>
</Box>

{/* <Box sx={{ pb: 7 }} >
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={0}>

        <BottomNavigation
     
      
          >
            <Typography  sx={{textAlign : 'center' , display : 'flex', alignItems : 'center'  ,  justifyContent: 'center'}}>
              ©  Copyright 2024, Credit Card Management
    
            </Typography>
        </BottomNavigation>
      </Paper>
    </Box> */}
    </>
  )
}

export default CreditCardManagement;