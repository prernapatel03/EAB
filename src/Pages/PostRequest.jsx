
import { Button, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { handleModelOpen } from "../Redux/Profile/ProfileSlice";

const PostRequest = ()=>{

  const dispatch = useDispatch();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Typography
            sx={{
              color: "#181623",
              fontWeight: "700",
              fontFamily: "Roboto",
              fontSize: "17px",
            }}
          >
            New Card Requests
          </Typography>
        </Grid>

        <Grid item xs={6} md={6} sx={{ textAlign: "end" }}>
          <Button
            sx={{
              color: "#FFFFFF",
              fontWeight: "500",
              fontSize: "13px",
              background: "#0069BF",
              padding: "8px 13px 8px 13px",
              textTransform: "capitalize",
            }}
            variant="contained"
            onClick={()=>dispatch(handleModelOpen())}
          >
            Create New Profile
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default PostRequest;