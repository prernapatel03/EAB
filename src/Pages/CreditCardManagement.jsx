import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import '../css/CreditCard.css'
import {
  Button,
  Chip,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  tableCellClasses,
} from "@mui/material";
import { fetchDataRequest } from "../Redux/CreditCard/CardManagementSlice";

const CreditCardManagement = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.CardManagementSlice);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  const [searchUserData, setSearchUserData] = useState("");

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#ffffff",
    },
  }));

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

  const UserFilterData =
    searchUserData &&
    users.filter((element) => {
      return (
        element.username.toLowerCase().includes(searchUserData.toLowerCase()) ||
        element.email.toLowerCase().includes(searchUserData.toLowerCase()) ||
        element.department.toLowerCase().includes(searchUserData.toLowerCase()) ||
        element.profile.toLowerCase().includes(searchUserData.toLowerCase())
      );
    });

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          background: "",
          textAlign: "",
          padding: "0 80px 0 80px",
          margin: "40px 0 40px 0",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              sx={{
                color: "#181623",
                fontWeight: "700",
                fontFamily: "Roboto",
                fontSize: "17px",
              }}
            >
              New Card Requests
              <Chip
                label="7"
                sx={{ marginLeft: "5px", backgroundColor: "#00B1B0" }}
              ></Chip>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={6}
            sx={{ textAlign: { xs: "start", sm: "end", md: "end" } }}
          >
            <Button
              variant="contained"
              sx={{
                color: "#FFFFFF",
                fontWeight: "500",
                fontSize: "13px",
                background: "#0069BF",
                padding: "8px 13px 8px 13px",
                textTransform: "capitalize",
              }}
            >
              View Requests
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ padding: "0 80px 0 80px", margin: "40px 0 40px 0" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography
              sx={{
                color: "#181623",
                fontWeight: "700",
                fontFamily: "Roboto",
                fontSize: "17px",
              }}
            >
              Search All Users
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Box
              style={{
                background: "#FFFFFF",
                borderRadius: "10px",
                position: "relative",
                width: "100%",
                height: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                type="search"
                value={searchUserData}
                placeholder="Search…"
                sx={{
                  color: "inherit",
                  left: 0,
                  width: "100%",
                  outline: "none",
                  border: "0",
                  borderRadius: "10px",
                }}
                onChange={(e) => setSearchUserData(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      {searchUserData ? (
                        <div
                          style={{
                            background: "#0069BF",
                            borderRadius: "10px",
                            color: "#ffffff",
                            height: "85%",
                            position: "absolute",
                            right: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "60px",
                            margin: "10px 5px",
                            border: 0,
                            cursor: "pointer",
                            "&:hover": {
                              backgroundColor: "#0069BF",
                            },
                          }}
                          onClick={() => setSearchUserData("")}
                        >
                          <ClearIcon />
                        </div>
                      ) : (
                        <div
                          style={{
                            background: "#0069BF",
                            borderRadius: "10px",
                            color: "#ffffff",
                            height: "85%",
                            position: "absolute",
                            right: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "60px",
                            margin: "10px 5px",
                            border: 0,
                            cursor: "pointer",
                          }}
                        >
                          <SearchIcon />
                        </div>
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            md={12}
            sx={{ marginTop: "15px", marginBottom: "15px" }}
          >
            <Typography
              sx={{
                color: "#6A6A6A",
                fontWeight: "500",
                fontFamily: "Roboto",
                fontSize: "17px",
                position: "relative",
                left: { xs: 0, sm: "15px", md: "15px" },
              }}
            >
              Found {UserFilterData.length} users
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ height: 520, width: "100%" }}>
          {searchUserData && (
            <TableContainer component={Paper} sx={{ borderRadius: "10px" }}>
              <Table
                sx={{ minWidth: 650, border: "1px solid #DBDBDB" }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      sx={{
                        color: "#181623",
                        fontSize: "16px",
                        fontweight: "500",
                        borderBottom: "1px solid #c2c2c2",
                      }}
                    >
                      User
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: "#181623",
                        fontWeight: "500",
                        fontSize: "16px",
                        borderLeft: "1px solid #c2c2c2",
                        borderBottom: "1px solid #c2c2c2",
                      }}
                    >
                      Email
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: "#181623",
                        fontWeight: "500",
                        fontSize: "16px",
                        borderLeft: "1px solid #c2c2c2",
                        borderBottom: "1px solid #c2c2c2",
                      }}
                    >
                      Department
                    </StyledTableCell>
                    <StyledTableCell
                      align=""
                      sx={{
                        color: "#181623",
                        fontWeight: "500",
                        fontSize: "16px",
                        borderLeft: "1px solid #c2c2c2",
                        borderBottom: "1px solid #c2c2c2",
                      }}
                    >
                      Spending Profile
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {UserFilterData.map((el, i) => {
                    return (
                      <StyledTableRow key={i}>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          sx={{
                            fontWeight: "400",
                            fontSize: "14px",
                            borderBottom: "1px solid #c2c2c2",
                          }}
                        >
                          {el.username}
                        </StyledTableCell>
                        <StyledTableCell
                          sx={{
                            fontWeight: "400",
                            fontSize: "14px",
                            borderLeft: "1px solid #c2c2c2",
                            borderBottom: "1px solid #c2c2c2",
                          }}
                        >
                          {el.email}
                        </StyledTableCell>
                        <StyledTableCell
                          sx={{
                            fontWeight: "400",
                            fontSize: "14px",
                            borderLeft: "1px solid #c2c2c2",
                            borderBottom: "1px solid #c2c2c2",
                          }}
                        >
                          {el.department}
                        </StyledTableCell>
                        <StyledTableCell
                          sx={{
                            fontWeight: "400",
                            fontSize: "14px",
                            borderLeft: "1px solid #c2c2c2",
                            borderBottom: "1px solid #c2c2c2",
                          }}
                        >
                          {el.profile}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Box>
    </>
  );
};
export default CreditCardManagement;
