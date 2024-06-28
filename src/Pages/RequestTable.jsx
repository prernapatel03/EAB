import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from '@mui/material'
import React, { useContext } from 'react'
import StoreContext from '../store/StoreContext'

export default function RequestTable() {



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
    
      const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#ffffff',
        },
    
      }));
    
   let { userRequest  , handleOpen , editFunction} =  useContext(StoreContext)
  return (
    <Box sx={{ flexGrow: 1 , background : '' , textAlign : 'start' , padding : '0 80px 0 80px' , margin : '40px 0 40px 0'}}>

  <Box sx={{ height: 520, width: '100%' }}>
 
 <TableContainer component={Paper} sx={{borderRadius : '10px' }}>
 <Table sx={{ minWidth: 650 ,  border : '1px solid #DBDBDB'}} aria-label="simple table">

   <TableHead>
     <TableRow >
       <StyledTableCell  xs={3} sx={{color : '#181623'  ,fontSize : '14px' , fontweight : '500' ,   borderBottom: '1px solid #c2c2c2' }}><th>Profile Name</th></StyledTableCell>
       <StyledTableCell align="" sx={{color : '#181623' , fontWeight : '500' ,fontSize : '14px' , borderLeft : '1px solid #c2c2c2' ,   borderBottom: '1px solid #c2c2c2'}}><th>User Assigned</th></StyledTableCell>
       <StyledTableCell align="" sx={{color : '#181623' , fontWeight : '500' ,fontSize : '14px' , borderLeft : '1px solid #c2c2c2' ,   borderBottom: '1px solid #c2c2c2'}}><th>Card</th></StyledTableCell>
       <StyledTableCell align="" sx={{color : '#181623' , fontWeight : '500' ,fontSize : '14px',  borderLeft : '1px solid #c2c2c2' ,  borderBottom: '1px solid #c2c2c2' }}><th>Comdata Profile</th></StyledTableCell>
       <StyledTableCell align="" sx={{color : '#181623' , fontWeight : '500' ,fontSize : '14px',  borderLeft : '1px solid #c2c2c2' ,  borderBottom: '1px solid #c2c2c2' }}><th>Expense Limit </th></StyledTableCell>

       <StyledTableCell align="" sx={{color : '#181623' , fontWeight : '500' ,fontSize : '14px',  borderLeft : '1px solid #c2c2c2' ,  borderBottom: '1px solid #c2c2c2' }}><th>Aging Limit</th></StyledTableCell>

       <StyledTableCell align="" sx={{color : '#181623' , fontWeight : '500' ,fontSize : '14px',  borderLeft : '1px solid #c2c2c2' ,  borderBottom: '1px solid #c2c2c2' }}><th>Reassigned Aging Limit</th></StyledTableCell>

       <StyledTableCell align="" sx={{color : '#181623' , fontWeight : '500' ,fontSize : '14px',  borderLeft : '1px solid #c2c2c2' ,  borderBottom: '1px solid #c2c2c2' }}><th>Uber Access</th></StyledTableCell>
       <StyledTableCell align="" sx={{color : '#181623' , fontWeight : '500' ,fontSize : '14px',  borderLeft : '1px solid #c2c2c2' ,  borderBottom: '1px solid #c2c2c2' }}><th>Air Access</th></StyledTableCell>
       <StyledTableCell align="" sx={{color : '#181623' , fontWeight : '500' ,fontSize : '14px',  borderLeft : '1px solid #c2c2c2' ,  borderBottom: '1px solid #c2c2c2' }}><th>Seamless Access</th></StyledTableCell>
       <StyledTableCell align="" sx={{color : '#181623' , fontWeight : '500' ,fontSize : '14px',  borderLeft : '1px solid #c2c2c2' ,  borderBottom: '1px solid #c2c2c2' }}><th>FedEx</th></StyledTableCell>

    </TableRow>
   </TableHead>
   <TableBody>
     {userRequest.map((row)=>(
       <StyledTableRow     onClick={() =>{ editFunction(row)}}
                key={row.Profile_Name}
      
       >

         <StyledTableCell component="th" scope="row"  sx={{fontWeight : '400' , fontSize : '14px' , borderBottom :'1px solid #c2c2c2'}} onClick={handleOpen}>
           {row.Profile_Name}
         </StyledTableCell>
         <StyledTableCell align="" sx={{fontWeight : '400' , fontSize : '14px' ,   borderLeft : '1px solid #c2c2c2' , borderBottom :'1px solid #c2c2c2'}} onClick={handleOpen}>{row.Card === true ? 'Yes' : 'No' }</StyledTableCell>
         <StyledTableCell align=""  sx={{fontWeight : '400' , fontSize : '14px' ,  borderLeft : '1px solid #c2c2c2' ,  borderBottom :'1px solid #c2c2c2'}} onClick={handleOpen}>{row.User_Assigned}</StyledTableCell>
         <StyledTableCell align=""  sx={{fontWeight : '400' , fontSize : '14px' ,  borderLeft : '1px solid #c2c2c2',  borderBottom :'1px solid #c2c2c2'}} onClick={handleOpen}>{row.Comdata_Profile}</StyledTableCell>
         <StyledTableCell align=""  sx={{fontWeight : '400' , fontSize : '14px' ,  borderLeft : '1px solid #c2c2c2',  borderBottom :'1px solid #c2c2c2'}} onClick={handleOpen}>{row.Expense_Limit}</StyledTableCell>
         <StyledTableCell align=""  sx={{fontWeight : '400' , fontSize : '14px' ,  borderLeft : '1px solid #c2c2c2',  borderBottom :'1px solid #c2c2c2'}} onClick={handleOpen}>{row.Aging_Limit}</StyledTableCell>
         <StyledTableCell align=""  sx={{fontWeight : '400' , fontSize : '14px' ,  borderLeft : '1px solid #c2c2c2',  borderBottom :'1px solid #c2c2c2'}} onClick={handleOpen}>{row.Reassigned_Aging_Limit}</StyledTableCell>
         <StyledTableCell align=""  sx={{fontWeight : '400' , fontSize : '14px' ,  borderLeft : '1px solid #c2c2c2',  borderBottom :'1px solid #c2c2c2'}} onClick={handleOpen}>{row.Uber_Access === true ? 'Yes' : 'No'}</StyledTableCell>
         <StyledTableCell align=""  sx={{fontWeight : '400' , fontSize : '14px' ,  borderLeft : '1px solid #c2c2c2',  borderBottom :'1px solid #c2c2c2'}} onClick={handleOpen}>{row.Air_Access === true ? 'Yes' : 'No'}</StyledTableCell>
         <StyledTableCell align=""  sx={{fontWeight : '400' , fontSize : '14px' ,  borderLeft : '1px solid #c2c2c2',  borderBottom :'1px solid #c2c2c2'}} onClick={handleOpen}>{row.Seamless_Access === true ? 'Yes' : 'No'}</StyledTableCell>
         <StyledTableCell align=""  sx={{fontWeight : '400' , fontSize : '14px' ,  borderLeft : '1px solid #c2c2c2',  borderBottom :'1px solid #c2c2c2'}} onClick={handleOpen}>{row.FedEx === true ? 'Yes' : 'No'}</StyledTableCell>
  

       </StyledTableRow>
     ))}
   </TableBody>
 </Table>
</TableContainer>

</Box>
</Box>
  )
}
