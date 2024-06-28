import { BottomNavigation, Box, Button, Modal, Paper, Typography, useFormControl } from '@mui/material'
import React, { useContext, useState } from 'react'
import StoreContext from '../store/StoreContext'
import { AxiosInstanceRequest } from '../Axios/AxiosInstance';

export default function RequestForm() {
  const style = {
    position: 'absolute',
    top: '49%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height : "70%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    paddingLeft : 4,
    paddingRight : 4,
    paddingTop : 4,
    paddingBottom : 4 ,  
    borderRadius : '10px',
    border : '1px solid #909090',
  };
  

  function MyFormHelperText() {
    const { focused } = useFormControl() || {};
  
  }
  

  let  { action , open , postUserRequest , setPostUserRequest ,  RequestfetchData  ,handleClose , updateFunction } = useContext(StoreContext);


  async function handleSubmit(e){
    e.preventDefault();

 

     if(action){
       updateFunction(postUserRequest);

     }
     else{

       try {
         
         let postUserRequestData =await AxiosInstanceRequest.post('/',{
          Profile_Name: postUserRequest.Profile_Name,
          User_Assigned : postUserRequest.User_Assigned,
          Card: postUserRequest.Card,
          Comdata_Profile: postUserRequest.Comdata_Profile,
          Expense_Limit: postUserRequest.Expense_Limit,
          Aging_Limit: postUserRequest.Aging_Limit,
          Reassigned_Aging_Limit: postUserRequest.Reassigned_Aging_Limit,
          Uber_Access: postUserRequest.Uber_Access,
          Air_Access: postUserRequest.Air_Access,
          Seamless_Access: postUserRequest.Seamless_Access,
          fedEx: postUserRequest.fedEx,
    
          
         })
         RequestfetchData();
         
   handleClose();
       } catch (error) {
         
       }

     }
 
}
   return (
    
    <Modal
    open={open}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >


    <Box sx={style} >

      
<Paper sx={{ position: 'fixed', top: 0, right: '0% ', width:'100%' , borderRadius : '10px'  }} elevation={0}>


    <BottomNavigation sx={{  background : "#EFEEEE"  , borderRadius : '10px' , borderBottomRightRadius : 0 , borderBottomLeftRadius :0 ,  justifyContent : 'start' , paddingLeft : '30px'}} 
      >
        <Typography  sx={{ display : 'flex', justifyContent  : "" ,   alignItems : 'center' , color : '#181623' , fontweight : 600}}>
       
       {
       action ? 'Edit Profile' : 'Create New Profile' 
       }

        </Typography>
    </BottomNavigation>
 
</Paper>
    <form noValidate autoComplete="off" onSubmit={handleSubmit} >


      <div item container>

        <label htmlFor="my-input">Profile Name:
        <input type='text' name="Profile_Name" id="my-input" aria-describedby="my-helper-text" placeholder="Standard - Spender" value={postUserRequest.Profile_Name} onChange={(e)=>setPostUserRequest({ ...postUserRequest , Profile_Name : e.target.value})}/>

           </label>
      </div>

      
      <div item container>

        <label htmlFor="my-input">Applicable for card:

        <input name="Card" id="my-input" type="checkbox" aria-describedby="my-helper-text" placeholder="Standard - Spender" checked={postUserRequest.Card} onChange={(e)=>setPostUserRequest({ ...postUserRequest , Card : e.target.checked})}/>

        </label>
      </div>

      <div item container>

       <label htmlFor="my-input">Comdata Profile:

       <input type='text' name="Comdata_Profile" id="my-input" value={postUserRequest.Comdata_Profile} aria-describedby="my-helper-text" placeholder="008" onChange={(e)=>setPostUserRequest({ ...postUserRequest , Comdata_Profile : e.target.value})}/>

       </label>
      </div>

<div item container>

<label htmlFor="my-input">Expense Limits:

<input  type='text' name="Expense_Limit" id="my-input" value={postUserRequest.Expense_Limit} aria-describedby="my-helper-text" placeholder="10000.00"  onChange={(e)=>setPostUserRequest({ ...postUserRequest , Expense_Limit : e.target.value})}/>

</label>
</div>


<div item container>

<label htmlFor="my-input">Aging Limit:

<input name="Aging_Limit" id="my-input" value={postUserRequest.Aging_Limit} type="text" aria-describedby="my-helper-text" placeholder="45" onChange={(e)=>setPostUserRequest({ ...postUserRequest , Aging_Limit : e.target.value})}/>
<span>Days</span>

</label>

</div>
<div item container>

<label htmlFor="my-input">Reassigned Aging Limit:

<input type='text' name="Reassigned_Aging_Limit"  id="my-input" value={postUserRequest.Reassigned_Aging_Limit} aria-describedby="my-helper-text" placeholder="10000.00" onChange={(e)=>setPostUserRequest({ ...postUserRequest , Reassigned_Aging_Limit : e.target.value})}/> 
<span>Days</span>
</label>

</div>
<div item container>

<label htmlFor="my-input">Uber Access:
<input name="Uber_Access" id="my-input"  checked={postUserRequest.Uber_Access} type="checkbox" aria-describedby="my-helper-text" placeholder="10000.00" onChange={(e)=>setPostUserRequest({ ...postUserRequest , Uber_Access : e.target.checked})}/> 

</label>

</div>
<div item container>

<label htmlFor="my-input">Air Access:

<input name="Air_Access" id="my-input"  checked={postUserRequest.Air_Access} type="checkbox" aria-describedby="my-helper-text" placeholder="10000.00"  onChange={(e)=>setPostUserRequest({ ...postUserRequest , Air_Access : e.target.checked})}/> 

</label>

</div>
<div item container>

<label htmlFor="my-input">Seamless Access:
<input name="Seamless_Access" id="my-input"  checked={postUserRequest.Seamless_Access} type="checkbox" aria-describedby="my-helper-text" placeholder="10000.00"  onChange={(e)=>setPostUserRequest({ ...postUserRequest , Seamless_Access : e.target.checked})}/> 

</label>

</div>
<div item container>

<label htmlFor="my-input">FedEx:

<input name="fedEx" id="my-input" 
                     checked={postUserRequest.fedEx} type="checkbox" aria-describedby="my-helper-text" placeholder="10000.00"  onChange={(e)=>setPostUserRequest({ ...postUserRequest , fedEx : e.target.checked})}
 
/> 
</label>


</div>


    
     
      <Paper sx={{ position: 'fixed', bottom: '-2%', right: '0% ', width:'100%' , borderRadius : '10px'  , background : '#efeeee'}} elevation={3}>

        <BottomNavigation
     
     sx={{
      borderRadius : '10px',
      justifyContent   :'end',
      background : '#efeeee',
       alignItems : 'center',
       borderTopRightRadius : 0 , borderTopLeftRadius :0 
     }}
          >
            <Typography  sx={{ display : 'flex', justifyContent : '' , alignItems : 'center' }}>
           
        <Button   variant="contained" sx={{background  : "#0069BF" , color : '#FFFFFF' , textTransform : 'capitalize' , fontSize : '13px' , padding : '8px 0px' ,     marginRight : '5px'}} type="submit"
   >Save
        </Button>
          <Button   variant="contained"    sx={{background  : "#507087" , textTransform : 'capitalize' , fontSize : '13px' , padding : '8px 0px',   marginRight : '8px' , "&:hover": { backgroundColor: "#507087" }}}
        onClick={handleClose}>Cancle
        </Button>

            </Typography>
        </BottomNavigation>
      </Paper>

        <MyFormHelperText />
      {/* </FormControl> */}
     
        </form>

        </Box>



</Modal>
  )
}
