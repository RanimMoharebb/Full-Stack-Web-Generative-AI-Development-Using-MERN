import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./client";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    userList: [],
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.userList = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default usersSlice.reducer;
