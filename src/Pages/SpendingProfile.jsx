import { Box } from "@mui/material";
import PostRequest from "./PostRequest";
import RequestTable from "./RequestTable";
import RequestForm from "./RequestForm";

const SpendingProfile = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          background: "",
          textAlign: "start",
          padding: "0px 80px 0 80px",
          margin: "40px 0 40px 0",
        }}
      >
        <RequestForm />
        <PostRequest />
      </Box>
      <RequestTable />
    </>
  );
};

export default SpendingProfile;
