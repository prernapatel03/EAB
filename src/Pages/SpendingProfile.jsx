import { BottomNavigation, Box, Button, CssBaseline, FormControl, FormHelperText, Grid, Input, InputLabel, Modal, OutlinedInput, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses, useFormControl  } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { AxiosInstanceRequest } from "../Axios/AxiosInstance";
import PostRequest from "./PostRequest";
import RequestTable from "./RequestTable";
import RequestForm from "./RequestForm";

const SpendingProfile = () =>{


    return(
      <>
   <Box sx={{ flexGrow: 1 , background : '' , textAlign : 'start' , padding : '0px 80px 0 80px' , margin : '40px 0 40px 0'}}>



<RequestForm />
     


  <PostRequest />
  </Box>

<RequestTable />
      </>
    )
  }
  
  export default SpendingProfile;



