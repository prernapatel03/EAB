import {
  BottomNavigation,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Modal,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  enableComdataProfile,
  getDataRequest,
  handleModelClose,
  postDataRequest,
  updateDataRequest,
} from "../Redux/Profile/ProfileSlice";
import CheckIcon from '@mui/icons-material/Check';

const RequestForm = () => {
  const dispatch = useDispatch();
  const { isEditProfie, userCurrentItem, comdataProfile, modelOpen } =
    useSelector((store) => store.ProfileSlice);

    const [postUserRequest, setPostUserRequest] = useState({
      Profile_Name: "",
      User_Assigned: "1289",
      Card: false,
      Comdata_Profile: "",
      Expense_Limit: "",
      Aging_Limit: "",
      Reassigned_Aging_Limit: "",
      Uber_Access: false,
      Air_Access: false,
      Seamless_Access: false,
      FedEx: false,
    });
  
    const [formErrors, setFormErros] = useState({});

  useEffect(() => {
    dispatch(getDataRequest());
  }, [dispatch]);

  const BpIcon = styled("Checkbox")(({ theme }) => ({
    textAlign: "center",
    verticalAlign: "middle",
    width: "20px !important",
    height: "20px !important",
    borderRadius: "10%",
    border: "1px solid #909090",
    boxShadow: "none",
    fontSize: "1em"
  }));

  const BpCheckedIcon = styled(BpIcon)({
    "&::before": {
      boxShadow: "none",
      fontSize: "1em",
      textAlign: "center",
      verticalAlign: "middle",
      borderRadius: "10%",
      content: "'\\2713'",
      display: "block",
      color: "#0069BF",
      border: "1px solid #0069BF",
      width: "20px !important",
      height: "20px !important",
      position: "relative",
      left: "-5%",
      top: "-5%",
    },
  });


  const style = {
    position: "absolute",
    top: "52%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    minHeight: "80%",
    bgcolor: "background.paper",
    boxShadow: 24,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: "10px",
    border: "1px solid #909090",
  };

  useEffect(() => {
    if (isEditProfie && userCurrentItem) {
      setPostUserRequest(userCurrentItem);
    }
  }, [isEditProfie, userCurrentItem]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newArray = formValidation();
    setFormErros(newArray);
    if (Object.keys(newArray).length > 0) {
      return;
    }
    if (isEditProfie) {
      try {
        dispatch(updateDataRequest(postUserRequest));
        dispatch(handleModelClose());
        // dispatch(enableComdataProfile(false));
        setPostUserRequest({
          Profile_Name: "",
          User_Assigned: "1289",
          Card: false,
          Comdata_Profile: "",
          Expense_Limit: "",
          Aging_Limit: "",
          Reassigned_Aging_Limit: "",
          Uber_Access: false,
          Air_Access: false,
          Seamless_Access: false,
          FedEx: false,
        });
        

      } catch (error) {
        console.log("edit error", error);
      }
    } else {
      try {
        dispatch(postDataRequest(postUserRequest));
        dispatch(handleModelClose());
        // dispatch(enableComdataProfile(false));
        setPostUserRequest({
          Profile_Name: "",
          User_Assigned: "1289",
          Card: false,
          Comdata_Profile: "",
          Expense_Limit: "",
          Aging_Limit: "",
          Reassigned_Aging_Limit: "",
          Uber_Access: false,
          Air_Access: false,
          Seamless_Access: false,
          FedEx: false,
        });
      } catch (error) {}
    }
  };

  function formValidation() {
    const newErrors = {};
    const { Profile_Name, Card, Comdata_Profile, Expense_Limit, Aging_Limit } =
      postUserRequest;

    if (!Profile_Name) {
      newErrors.Profile_Name = "profile name is required";
    }
    if (Card !== true) {
      newErrors.Card = "Applicable Card is required";
    }
    if (!Expense_Limit) {
      newErrors.Expense_Limit = "Expensive limit is required";
    }
    if (!Aging_Limit) {
      newErrors.Aging_Limit = "Aging limit is required";
    }
    if (!Number(Comdata_Profile)) {
      newErrors.Comdata_Profile = "enter valid number";
    }
    if (!Number(Expense_Limit)) {
      newErrors.Expense_Limit = "enter valid number";
    }
    if (!Number(Aging_Limit)) {
      newErrors.Aging_Limit = "enter valid number";
    }
    if (!Comdata_Profile) {
      newErrors.Comdata_Profile = "Comdata profile is required";
    } else if (Comdata_Profile.length > 3 || Comdata_Profile.length < 3) {
      newErrors.Comdata_Profile = "enter only 3 number";
    }
    return newErrors;
  }
  return (
    <Modal
      open={modelOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Paper
          sx={{
            position: "fixed",
            top: 0,
            right: "0% ",
            width: "100%",
            borderRadius: "10px",
          }}
          elevation={0}
        >
          <BottomNavigation
            sx={{
              background: "#EFEEEE",
              borderRadius: "10px",
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 0,
              justifyContent: "start",
              paddingLeft: "30px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "",
                alignItems: "center",
                color: "#181623",
                fontweight: 600,
              }}
            >
              {isEditProfie ? "Edit Profile" : "Create New Profile"}
            </Typography>
          </BottomNavigation>
        </Paper>
        <Box
          autoCompconste="off"
          component="form"
          onSubmit={handleFormSubmit}
          sx={{ marginTop: "90px" }}
        >
          <FormControl
            item
            container
            className="form-group"
            component="div"
            sx={{
              marginBottom: "5px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              width: "100%",
              alignItems: "center",
            }}
          >
            <FormLabel
              sx={{
                color: "#000000",
                fontSize: "16px",
                fontWeight: "550",
              }}
            >
              Profile Name :
            </FormLabel>
            <Box component="div" className="inputClass">
              <TextField
                type="text"
                name="Profile_Name"
                id="input-text"
                value={postUserRequest.Profile_Name}
                aria-describedby="my-helper-text"
                placeholder="Standard - Spender"
                onChange={(e) =>
                  setPostUserRequest({
                    ...postUserRequest,
                    Profile_Name: e.target.value,
                  })
                }
              />
            </Box>
          </FormControl>
          <Box
            component="div"
            sx={{
              color: "red",
              textAlign: "center",
            }}
          >
            {formErrors && <Typography>{formErrors.Profile_Name}</Typography>}
          </Box>
          <FormControl
            component="div"
            item
            container
            className="form-group"
            sx={{
              marginBottom: "5px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              width: "100%",
              alignItems: "center",
            }}
          >
            <FormLabel
              sx={{
                color: "#000000",
                fontSize: "16px",
                fontWeight: "550",
              }}
            >
              Applicable for card :
            </FormLabel>
            <Box component="div" className="inputClass">
              <Checkbox
                sx={{
                  padding: '0',
                }}
                name="Card"
                aria-describedby="my-helper-text"
                checkedIcon={<BpCheckedIcon />}
                icon={<BpIcon />}
                checked={postUserRequest.Card}
                onChange={(e) => {
                  setPostUserRequest({
                    ...postUserRequest,
                    Card: e.target.checked,
                  });
                  dispatch(enableComdataProfile(e.target.checked));
                }}
              />
            </Box>
          </FormControl>
          <Box
            component="div"
            sx={{
              color: "red",
              textAlign: "center",
            }}
          >
            {formErrors && <Typography>{formErrors.Card}</Typography>}
          </Box>
          <FormControl
            item
            container
            className="form-group"
            component="div"
            sx={{
              marginBottom: "5px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              width: "100%",
              alignItems: "center",
            }}
          >
            <FormLabel
              sx={{
                color: "#000000",
                fontSize: "16px",
                fontWeight: "550",
              }}
            >
              Comdata Profile :
            </FormLabel>
            <Box component="div" className="inputClass">
              <TextField
                type="text"
                name="Comdata_Profile"
                id="input-text"
                value={postUserRequest.Comdata_Profile}
                aria-describedby="my-helper-text"
                placeholder="008"
                onChange={(e) =>
                  setPostUserRequest({
                    ...postUserRequest,
                    Comdata_Profile: e.target.value,
                  })
                }
                disabled={comdataProfile}
              />
            </Box>
          </FormControl>
          <Box
            component="div"
            sx={{
              color: "red",
              textAlign: "center",
            }}
          >
            {formErrors && (
              <Typography>{formErrors.Comdata_Profile}</Typography>
            )}
          </Box>
          <FormControl
            item
            container
            className="form-group"
            sx={{
              marginBottom: "5px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              width: "100%",
              alignItems: "center",
            }}
          >
            <FormLabel
              sx={{
                color: "#000000",
                fontSize: "16px",
                fontWeight: "550",
              }}
            >
              Expense Limits :
            </FormLabel>
            <Box className="inputClass">
              <TextField
                type="text"
                name="Expense_Limit"
                id="input-text"
                value={postUserRequest.Expense_Limit}
                aria-describedby="my-helper-text"
                placeholder="10000.00"
                onChange={(e) =>
                  setPostUserRequest({
                    ...postUserRequest,
                    Expense_Limit: e.target.value,
                  })
                }
              />
            </Box>
          </FormControl>
          <Box
            component="div"
            sx={{
              color: "red",
              textAlign: "center",
            }}
          >
            {formErrors && <Typography>{formErrors.Expense_Limit}</Typography>}
          </Box>
          <FormControl
            item
            container
            sx={{
              marginBottom: "15px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              width: "100%",
              alignItems: "center",
              height : 'max-content',          
            }}
          >
            <FormLabel
              sx={{
                color: "#000000",
                fontSize: "16px",
                fontWeight: "550",
              }}
            >
              Aging Limit :
            </FormLabel>
            <Box
              component="div"
              sx={{
                display : 'flex',
                marginLeft: "10px",
                width: "47.5%",
                alignItems: "center",    
                padding : '0!important'           
              }}
              >
              <TextField
                sx={{
                   width: "40%", marginRight: "5px"
                 }}
                name="Aging_Limit"
                value={postUserRequest.Aging_Limit}
                type="text"
                aria-describedby="my-helper-text"
                placeholder="45"
                onChange={(e) =>
                  setPostUserRequest({
                    ...postUserRequest,
                    Aging_Limit: e.target.value,
                  })
                }
              />
              Days
            </Box>
          </FormControl>
          <Box
            sx={{
              color: "red",
              textAlign: "center",
            }}
          >
            {formErrors && <Typography>{formErrors.Aging_Limit}</Typography>}
          </Box>
          <FormControl
            sx={{
              marginBottom: "15px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              width: "100%",
              alignItems: "center",
            }}
            className="form-group"
          >
            <FormLabel
              sx={{
                color: "#000000",
                fontSize: "16px",
                fontWeight: "550",
              }}
            >
              Reassigned Aging Limit :
            </FormLabel>
            <Box
              component="div"
              sx={{
                display : 'flex',
                marginLeft: "10px",
                width: "47.5%",
                alignItems: "center",
              }}
            >
              <TextField
                sx={{
                  width: "40%",
                  height: "100%",
                  marginRight: "5px",
                }}
                type="number"
                name="Reassigned_Aging_Limit"
                value={postUserRequest.Reassigned_Aging_Limit}
                aria-describedby="my-helper-text"
                placeholder="45"
                onChange={(e) =>
                  setPostUserRequest({
                    ...postUserRequest,
                    Reassigned_Aging_Limit: e.target.value,
                  })
                }
              />
              Days
            </Box>
          </FormControl>
          <FormControl
            className="form-group"
            sx={{
              marginBottom: "5px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              width: "100%",
              alignItems: "center",
            }}
          >
            <FormLabel
              sx={{
                color: "#000000",
                fontSize: "16px",
                fontWeight: "550",
              }}
            >
              Uber Access :
            </FormLabel>
            <Box component="div" className="inputClass">
              <Checkbox
                sx={{
                  padding: '0',
                }}
                checkedIcon={<BpCheckedIcon />}
                icon={<BpIcon />}
                name="Uber_Access"
                checked={postUserRequest.Uber_Access}
                type="checkbox"
                aria-describedby="my-helper-text"
                onChange={(e) =>
                  setPostUserRequest({
                    ...postUserRequest,
                    Uber_Access: e.target.checked,
                  })
                }
              />
            </Box>
          </FormControl>
          <FormControl
            className="form-group"
            sx={{
              marginBottom: "5px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              width: "100%",
              alignItems: "center",
            }}
          >
            <FormLabel
              sx={{
                color: "#000000",
                fontSize: "16px",
                fontWeight: "550",
              }}
            >
              Air Access :
            </FormLabel>
            <Box component="div" className="inputClass">
              <Checkbox
                sx={{
                  padding: '0',
                }}
                checkedIcon={<BpCheckedIcon />}
                icon={<BpIcon />}
                name="Air_Access"
                checked={postUserRequest.Air_Access}
                type="checkbox"
                aria-describedby="my-helper-text"
                onChange={(e) =>
                  setPostUserRequest({
                    ...postUserRequest,
                    Air_Access: e.target.checked,
                  })
                }
              />
            </Box>
          </FormControl>
          <FormControl
            className="form-group"
            sx={{
              marginBottom: "5px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              width: "100%",
              alignItems: "center",
            }}
          >
            <FormLabel
              sx={{
                color: "#000000",
                fontSize: "16px",
                fontWeight: "550",
              }}
            >
              Seamless Access :
            </FormLabel>
            <Box component="div" className="inputClass">
              <Checkbox
                sx={{
                  padding: '0',
                }}
                checkedIcon={<BpCheckedIcon />}
                icon={<BpIcon />}
                name="Seamless_Access"
                checked={postUserRequest.Seamless_Access}
                type="checkbox"
                aria-describedby="my-helper-text"
                onChange={(e) =>
                  setPostUserRequest({
                    ...postUserRequest,
                    Seamless_Access: e.target.checked,
                  })
                }
              />
            </Box>
          </FormControl>
          <FormControl
            className="form-group"
            sx={{
              marginBottom: "5px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              width: "100%",
              alignItems: "center",
            }}
          >
            <FormLabel
              sx={{
                color: "#000000",
                fontSize: "16px",
                fontWeight: "550",
              }}
            >
              FedEx :
            </FormLabel>
            <Box component="div" class="inputClass">
              <Checkbox  
                sx={{
                  padding: '4px 0',
                }}
                checkedIcon={<BpCheckedIcon />}
                icon={<BpIcon />}
                name="FedEx"
                checked={postUserRequest.FedEx}
                type="checkbox"
                aria-describedby="my-helper-text"
                onChange={(e) =>
                  setPostUserRequest({
                    ...postUserRequest,
                    FedEx: e.target.checked,
                  })
                }
              />
            </Box>
          </FormControl>
          <Paper
            sx={{
              position: "fixed",
              bottom: "-2%",
              right: "0% ",
              width: "100%",
              borderRadius: "10px",
              background: "#efeeee",
            }}
            elevation={3}
          >
            <BottomNavigation
              sx={{
                borderRadius: "10px",
                justifyContent: "end",
                background: "#efeeee",
                alignItems: "center",
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background: "#0069BF",
                    color: "#FFFFFF",
                    textTransform: "capitalize",
                    fontSize: "13px",
                    padding: "8px 0px",
                    marginRight: "5px",
                  }}
                  type="submit"
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    background: "#507087",
                    textTransform: "capitalize",
                    fontSize: "13px",
                    padding: "8px 0px",
                    marginRight: "8px",
                    "&:hover": { backgroundColor: "#507087" },
                  }}
                  onClick={() => {
                    dispatch(handleModelClose());
                    // dispatch(enableComdataProfile(false));

                    setPostUserRequest({
                      Profile_Name: "",
                      User_Assigned: "1289",
                      Card: false,
                      Comdata_Profile: "",
                      Expense_Limit: "",
                      Aging_Limit: "",
                      Reassigned_Aging_Limit: "",
                      Uber_Access: false,
                      Air_Access: false,
                      Seamless_Access: false,
                      FedEx: false,
                    });
                    setFormErros("");
                  }}
                >
                  Cancle
                </Button>
              </Typography>
            </BottomNavigation>
          </Paper>
        </Box>
      </Box>
    </Modal>
  );
};

export default RequestForm;
