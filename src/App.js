import './App.css';
import  Button  from '@mui/material/Button';
import Navbar from './Components/Navbar';
import CreditCardManagement from './Pages/CreditCardManagement';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SpendingProfile from './Pages/SpendingProfile';

import StoreContext from './store/StoreContext';
import { useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import { AxiosInstanceRequest } from './Axios/AxiosInstance';


function App() {


  const [open, setOpen] = useState(false);
  let [  userRequest , setUserRequest ] = useState([]);
 
  const [currentItem, setCurrentItem] = useState(null);
  const [ action , setAction ] = useState(false);

  let [ postUserRequest , setPostUserRequest ] = useState({
    Profile_Name : "",
    User_Assigned :"1289",
    Card : false,
    Comdata_Profile : "",
    Expense_Limit : "",
    Aging_Limit : "",
    Reassigned_Aging_Limit : "",
    Uber_Access : false,
    Air_Access : false,
    Seamless_Access : false,
    fedEx : false
  
  });
  const handleOpen = () => setOpen(true);
const handleClose = () =>{ 

  setOpen(false);
};





async function RequestfetchData(){
  let response = await AxiosInstanceRequest.get("/" , { headers : {
   'Content-Type' : 'Application/json'
 }});
  setUserRequest(response.data);


}

async function updateFunction(item){
  try {
    let updateResponse = await AxiosInstanceRequest.patch(`/${item.id}`, item);
    RequestfetchData();
    setAction(false);
    setCurrentItem(null);
    handleClose();
  } catch (error) {
    
  }
}

function editFunction(e){
  setAction(true);
  setCurrentItem(e);

}

useEffect(()=>{
 RequestfetchData();
}, [])



useEffect(() => {
  if (action && currentItem) {
    setPostUserRequest(currentItem);
  } else {
    setPostUserRequest({
      name: "",
      email: "",
      phNumber: "",
      password: "",
    });
  }
}, [action, currentItem]);


// const Item = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   textAlign: "end",
//   color: theme.palette.text.secondary,
// }));









  return (
    <>
    
    <StoreContext.Provider value={{
      setOpen , handleOpen , open , handleClose,

      setPostUserRequest,
      postUserRequest,
      userRequest,
  
      RequestfetchData,
      updateFunction,
      editFunction


    }}>

    <BrowserRouter>
    <Routes>
             <Route path='/' element={<Navbar />} >

          
             <Route path='/' element={<CreditCardManagement />}/>

             <Route path='/SpendingProfile' element={<SpendingProfile />}/>

               

             </Route>
    </Routes>
    
    </BrowserRouter>
    </StoreContext.Provider>

    </>
  );
}

export default App;
