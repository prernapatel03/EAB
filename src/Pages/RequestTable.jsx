import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  editFunction,
  enableComdataProfile,
  getDataRequest,
  handleModelOpen,
} from "../Redux/Profile/ProfileSlice";

const RequestTable = () => {
  const dispatch = useDispatch();
  const { userRequest } = useSelector((state) => state.ProfileSlice);
  useEffect(() => {
    dispatch(getDataRequest());
  }, [dispatch]);

  function edit(row) {
    dispatch(enableComdataProfile(row.Card));
    dispatch(editFunction(row));
    dispatch(handleModelOpen());
  }

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#dbdbdb",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#F6F6F6",
    },
    "&:last-child tr": {
      borderBottom: "0px",
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#ffffff",
    },
  }));

  return (
    <Box
      sx={{
        flexGrow: 1,
        background: "",
        textAlign: "start",
        padding: "0 80px 0 80px",
        margin: "40px 0 40px 0",
      }}
    >
      <Box sx={{ height: "100%", width: "100%" }}>
        <TableContainer component={Paper} sx={{ borderRadius: "10px" }}>
          <Table sx={{ border: "1px solid #DBDBDB" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell
                  xs={3}
                  sx={{
                    color: "#181623",
                    fontSize: "14px",
                    fontweight: "500",
                    borderBottom: "1px solid #c2c2c2",
                    // width: "20%",
                  }}
                >
                  Profile Name
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    color: "#181623",
                    fontWeight: "500",
                    fontSize: "14px",
                    borderLeft: "1px solid #c2c2c2",
                    borderBottom: "1px solid #c2c2c2",
                    // width: "8%",
                  }}
                >
                  Card
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    color: "#181623",
                    fontWeight: "500",
                    fontSize: "14px",
                    borderLeft: "1px solid #c2c2c2",
                    borderBottom: "1px solid #c2c2c2",
                  }}
                >
                 User Assigned
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    color: "#181623",
                    fontWeight: "500",
                    fontSize: "14px",
                    borderLeft: "1px solid #c2c2c2",
                    borderBottom: "1px solid #c2c2c2",
                  }}
                >
                  Comdata Profile
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    color: "#181623",
                    fontWeight: "500",
                    fontSize: "14px",
                    borderLeft: "1px solid #c2c2c2",
                    borderBottom: "1px solid #c2c2c2",
                  }}
                >
                  Expense Limit
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    color: "#181623",
                    fontWeight: "500",
                    fontSize: "14px",
                    borderLeft: "1px solid #c2c2c2",
                    borderBottom: "1px solid #c2c2c2",
                  }}
                >
                  Aging Limit
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    color: "#181623",
                    fontWeight: "500",
                    fontSize: "14px",
                    borderLeft: "1px solid #c2c2c2",
                    borderBottom: "1px solid #c2c2c2",
                  }}
                >
                  Reassigned Aging Limit
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    color: "#181623",
                    fontWeight: "500",
                    fontSize: "14px",
                    borderLeft: "1px solid #c2c2c2",
                    borderBottom: "1px solid #c2c2c2",
                  }}
                >
                  Uber Access
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    color: "#181623",
                    fontWeight: "500",
                    fontSize: "14px",
                    borderLeft: "1px solid #c2c2c2",
                    borderBottom: "1px solid #c2c2c2",
                  }}
                >
                  Air Access
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    color: "#181623",
                    fontWeight: "500",
                    fontSize: "14px",
                    borderLeft: "1px solid #c2c2c2",
                    borderBottom: "1px solid #c2c2c2",
                  }}
                >
                  Seamless Access
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    color: "#181623",
                    fontWeight: "500",
                    fontSize: "14px",
                    borderLeft: "1px solid #c2c2c2",
                    borderBottom: "1px solid #c2c2c2",
                  }}
                >
                  FedEx
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userRequest.map((row, i) => (
                <StyledTableRow onClick={() => edit(row)} key={i}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontWeight: "400",
                      fontSize: "14px",
                      borderBottom: "1px solid #c2c2c2",
                      width: "24%",
                    }}
                  >
                    {row.Profile_Name}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      fontWeight: "400",
                      fontSize: "14px",
                      borderLeft: "1px solid #c2c2c2",
                      borderBottom: "1px solid #c2c2c2",
                      width: "8%",
                    }}
                  >
                    {row.Card ===  true ? "yes" : false ? "No" : "No"}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      fontWeight: "400",
                      fontSize: "14px",
                      borderLeft: "1px solid #c2c2c2",
                      borderBottom: "1px solid #c2c2c2",
                      width: "7%",
                    }}
                  >
                    {row.User_Assigned}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      fontWeight: "400",
                      fontSize: "14px",
                      borderLeft: "1px solid #c2c2c2",
                      borderBottom: "1px solid #c2c2c2",
                      width: "8%",
                    }}
                  >
                    {row.Comdata_Profile}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      fontWeight: "400",
                      fontSize: "14px",
                      borderLeft: "1px solid #c2c2c2",
                      borderBottom: "1px solid #c2c2c2",
                      width: "7%",
                    }}
                  >
                    {row.Expense_Limit}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      fontWeight: "400",
                      fontSize: "14px",
                      borderLeft: "1px solid #c2c2c2",
                      borderBottom: "1px solid #c2c2c2",
                      width: "8%",
                    }}
                  >
                    {row.Aging_Limit}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      fontWeight: "400",
                      fontSize: "14px",
                      borderLeft: "1px solid #c2c2c2",
                      borderBottom: "1px solid #c2c2c2",
                      width: "8%",
                    }}
                  >
                    {row.Reassigned_Aging_Limit}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      fontWeight: "400",
                      fontSize: "14px",
                      borderLeft: "1px solid #c2c2c2",
                      borderBottom: "1px solid #c2c2c2",
                      width: "6%",
                    }}
                  >
                    {row.Uber_Access ===  true ? "yes" : false ? "No" : "No"}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      fontWeight: "400",
                      fontSize: "14px",
                      borderLeft: "1px solid #c2c2c2",
                      borderBottom: "1px solid #c2c2c2",
                      width: "8%",
                    }}
                  >
                    {row.Air_Access ===  true ? "yes" : false ? "No" : "No"}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      fontWeight: "400",
                      fontSize: "14px",
                      borderLeft: "1px solid #c2c2c2",
                      borderBottom: "1px solid #c2c2c2",
                      width: "8%",
                    }}
                  >
                    {row.Seamless_Access ===  true ? "yes" : false ? "No" : "No"}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      fontWeight: "400",
                      fontSize: "14px",
                      borderLeft: "1px solid #c2c2c2",
                      borderBottom: "1px solid #c2c2c2",
                      width: "8%",
                    }}
                  >
                    {row.FedEx ===  true ? "yes" : false ? "No" : "No"}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default RequestTable;
