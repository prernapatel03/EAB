import * as React from 'react';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';

import CheckIcon from '@mui/icons-material/Check';

function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}
const BpIcon = styled('span')(({ theme }) => ({

}));
const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&::before': {
    display: 'block',
    width: 16,
    height: 16,
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});
function handleChange(e){
   console.log(e.target.value)
}
const Demo = () => { 
  return (
    <>
        <div>
          {/* <select onChange={handleChange}>
            <option value='blue'>blue</option>
            <option value='red'>red</option>
            <option value='green'>green</option>
          </select> */}


   <div onChange={handleChange}>
     <input type="checkbox" name='blue' value='red'/>
     <input type="checkbox" name='blue' value='green'/>
     <input type="checkbox" name='blue' value='blue'/>
   </div>
      <BpCheckbox />
    </div>

    </>
  );
};

export default Demo;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Demo() {
//   const [userData, setUserData] = useState([]);

//   const [form, setForm] = useState("none");

//   const [defaultInput, setDefaultInput] = useState(true);

//   const [ isEditing , setIsEditing ] = useState(false);

//   const [  currentItem , setCurrentItem ] = useState(null)

//   const [demoData, setDemoData] = useState({
//     name: "",
//     checkBoxVal: false,
//     changeName: "",
//   });

//   function checkFunction(e) {
//     if (e == true) {
//       setDefaultInput(false);
//     } else {
//       setDefaultInput(true);
//     }
//   }
//   async function readData() {
//     try {
//       const response = await axios.get("http://localhost:3039/demoData");
//       setUserData(response.data);
//     } catch (error) {
//       console.log("read ", error);
//     }
//   }
//   useEffect(() => {
//     readData();
//   }, []);

//   useEffect(()=>{
//          if(isEditing){
//           setDemoData(currentItem);
//          }
//          else{

//          }
//   }, [isEditing , currentItem])
//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       if(isEditing){

//         const postData = await axios.patch(
//           `http://localhost:3039/demoData/${demoData.id}`,
//           demoData
//         );
//         if (postData.status) {
//           setDemoData({
//             name: "",
//             checkBoxVal: false,
//             changeName: "",
//           });
//           readData();
//           setIsEditing(false);
//           setCurrentItem(null);
//           setDemoData({
//             name: "",
//             checkBoxVal: false,
//             changeName: "",
//           });
//           setForm("none");
//         }

//       }
//         else{
//         const postData = await axios.post(
//           "http://localhost:3039/demoData",
//           demoData
//         );
//         if (postData.status) {
//           readData();
//           handleClose();
//         }
//       }
//     } catch (error) {}
//   }
//   function handleOpen() {
//     setForm("block");
//   }
//   function handleClose() {
//     setDemoData({
//       name: "",
//       checkBoxVal: false,
//       changeName: "",
//     });
//     setForm("none");
//     setDefaultInput(true);
//     setIsEditing(false);
//     setCurrentItem(null);
//   }
//   function editFunction(e){
//   setIsEditing(true);
//   setCurrentItem(e);
//   handleOpen();
//   checkFunction(e.checkBoxVal)
//   }
//   return (
//     <>
//       <button onClick={handleOpen}>open</button>
//       <form onSubmit={handleSubmit} method="post" style={{ display: form }}>
//         <input
//           type="text"
//           name="name"
//           value={demoData.name}
//           onChange={(e) => setDemoData({ ...demoData, name: e.target.value })}
//         />
//         <input
//           type="checkbox"
//           name="checkBoxVal"
//           checked={demoData.checkBoxVal}
//           onChange={(e) => {
//             setDemoData({ ...demoData, checkBoxVal: e.target.checked });
//             checkFunction(e.target.checked);
//           }}
//         />
//         <input
//           type="text"
//           name="changeName"
//           value={demoData.changeName}
//           onChange={(e) =>
//             setDemoData({ ...demoData, changeName: e.target.value })
//           }
//           disabled={defaultInput}
//         />
//         <button type="submit"> {isEditing ? "save" : "add"}</button>
//         <button type="button" onClick={handleClose}>
//           cancle
//         </button>
//       </form>

//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th>name</th>
//               <th>checkbox</th>
//               <th>changename</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userData.map((e) => {
//               return (
//                 <tr>
//                   <td>{e.name}</td>
//                   <td>
//                     {e.checkBoxVal === true ? "yes" : false ? "No" : "No"}
//                   </td>
//                   <td>{e.changeName}</td>
//                     <td>
//                     <button onClick={() => editFunction(e)}>Edit</button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }
// export default Demo;

// import { useDispatch , useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { getData, thunkSlice } from '../StoreData/DataSlice';
// import { Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
// function Demo() {

//   const dispatch = useDispatch();
//   const data = useSelector(state =>state.thunkSlice)

//   console.log('data' , data);
//   const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: "#ffffff",
//     },
//   }));

//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(odd)": {
//       backgroundColor: "#dbdbdb",
//     },
//     "&:nth-of-type(even)": {
//       backgroundColor: "#F6F6F6",
//     },
//     "&:last-child tr": {
//       borderBottom: "0px",
//     },
//   }));

//   useEffect(()=>{
//        dispatch(getData())
//   },[dispatch])
//   return (
//     <div className="">
//       <TableContainer component={Paper} sx={{ borderRadius: "10px" }}>
//               <Table
//                 sx={{ minWidth: 650, border: "1px solid #DBDBDB" }}
//                 aria-label="simple table"
//               >
//                 <TableHead>
//                   <TableRow>
//                     <StyledTableCell
//                       sx={{
//                         color: "#181623",
//                         fontSize: "16px",
//                         fontweight: "500",
//                         borderBottom: "1px solid #c2c2c2",
//                       }}
//                     >
//                       User
//                     </StyledTableCell>
//                     <StyledTableCell
//                       align=""
//                       sx={{
//                         color: "#181623",
//                         fontWeight: "500",
//                         fontSize: "16px",
//                         borderLeft: "1px solid #c2c2c2",
//                         borderBottom: "1px solid #c2c2c2",
//                       }}
//                     >
//                       Email
//                     </StyledTableCell>
//                     <StyledTableCell
//                       align=""
//                       sx={{
//                         color: "#181623",
//                         fontWeight: "500",
//                         fontSize: "16px",
//                         borderLeft: "1px solid #c2c2c2",
//                         borderBottom: "1px solid #c2c2c2",
//                       }}
//                     >
//                       Department
//                     </StyledTableCell>
//                     <StyledTableCell
//                       align=""
//                       sx={{
//                         color: "#181623",
//                         fontWeight: "500",
//                         fontSize: "16px",
//                         borderLeft: "1px solid #c2c2c2",
//                         borderBottom: "1px solid #c2c2c2",
//                       }}
//                     >
//                       Spending Profile
//                     </StyledTableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {data.map((el, i) => {
//                     return (
//                       <StyledTableRow key={i}>
//                         <StyledTableCell
//                           component="th"
//                           scope="row"
//                           sx={{
//                             fontWeight: "400",
//                             fontSize: "14px",
//                             borderBottom: "1px solid #c2c2c2",
//                           }}
//                         >
//                           {el.username}
//                         </StyledTableCell>
//                         <StyledTableCell
//                           sx={{
//                             fontWeight: "400",
//                             fontSize: "14px",
//                             borderLeft: "1px solid #c2c2c2",
//                             borderBottom: "1px solid #c2c2c2",
//                           }}
//                         >
//                           {el.email}
//                         </StyledTableCell>
//                         <StyledTableCell
//                           sx={{
//                             fontWeight: "400",
//                             fontSize: "14px",
//                             borderLeft: "1px solid #c2c2c2",
//                             borderBottom: "1px solid #c2c2c2",
//                           }}
//                         >
//                           {el.department}
//                         </StyledTableCell>
//                         <StyledTableCell
//                           sx={{
//                             fontWeight: "400",
//                             fontSize: "14px",
//                             borderLeft: "1px solid #c2c2c2",
//                             borderBottom: "1px solid #c2c2c2",
//                           }}
//                         >
//                           {el.profile}
//                         </StyledTableCell>
//                       </StyledTableRow>
//                     );
//                   })}
//                 </TableBody>
//               </Table>
//             </TableContainer>

// </div>
//   );
// }

// export default Demo;
