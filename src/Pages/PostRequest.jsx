import React, { useContext } from 'react'
import StoreContext from '../store/StoreContext'
import { Button, Grid, Typography } from '@mui/material'

export default function PostRequest() {

   let {handleOpen  } = useContext(StoreContext)
  return (
    <>
    
    <Grid container spacing={2}>
      <Grid item xs={6} md={6} >
        <Typography sx={{ color : '#181623' , fontWeight : '700' , fontFamily : 'Roboto' , fontSize : '17px'}}>New Card Requests 
            {/* <span style={{ background : '#0D554A' , borderRadius : '50%' , height: '35px' , width : '35px'}}>7</span> */}
           </Typography>
      </Grid>
  

      <Grid item xs={6} md={6} sx={{textAlign : 'end'}}>
        <Button sx={{ color : '#FFFFFF' , fontWeight : '500' , fontSize : '13px' , background : '#0069BF' , padding : '8px 13px 8px 13px' , textTransform: "capitalize" , }} variant="contained" onClick={ handleOpen }>
        Create New Profile
        </Button>
      </Grid>
    </Grid>
    </>
  )
}
