import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    isEditProfie: false,
    userCurrentItem: null,
    modelOpen: false,
    comdataProfile: true,
    userRequest: [],
    loading: false,
    error: null,
  },
  reducers: {
    getDataRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    getDataSuccess: (state, action) => {
      state.loading = false;
      state.userRequest = action.payload;
    },
    getDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    postDataRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    postDatasuccess: (state, action) => {
      state.loading = false;
      state.userRequest.push(action.payload);
    },
    postDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateDataRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    updateDatasuccess: (state, action) => {
      state.loading = false;
      state.userRequest = state.userRequest.map((e) =>
        e.id === action.payload.id ? action.payload : e
      );
    },
    updateDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    editFunction: (state, action) => {
      state.isEditProfie = true;
      state.userCurrentItem = action.payload;
    },
    handleModelOpen: (state, action) => {
      state.modelOpen = true;
    },
    handleModelClose: (state, action) => {
      state.modelOpen = false;
      state.isEditProfie = false;
      state.userCurrentItem = null;
      state.comdataProfile = true;
    },
    enableComdataProfile: (state, action) => {
      console.log("enableComdataProfile", action);
      if (action.payload === true) {
        state.comdataProfile = false;
      } else {
        state.comdataProfile = true;
      }
    },
  },
});

export const {
  editFunction,
  handleModelOpen,
  handleModelClose,
  enableComdataProfile,
  getDataSuccess,
  getDataRequest,
  getDataFailure,
  postDatasuccess,
  postDataFailure,
  postDataRequest,
  updateDataRequest,
  updateDatasuccess,
  updateDataFailure,
} = ProfileSlice.actions;

export default ProfileSlice.reducer;
