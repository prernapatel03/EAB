import { createSlice } from "@reduxjs/toolkit";

const CardManagementSlice = createSlice({
    name: "users",
    initialState: {
      loading: false,
      users: [],
      error: null,
    },
    reducers: {
      fetchDataRequest: (state, action) => {
        state.loading = true;
            state.error = null;
      },
      fetchDataSuccess: (state, action) => {
        state.loading = false;
        state.users = action.payload;
      },
      fetchDataFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });

  export const {
    fetchDataRequest,
    fetchDataSuccess,
    fetchDataFailure
  } = CardManagementSlice.actions;


export default CardManagementSlice.reducer
