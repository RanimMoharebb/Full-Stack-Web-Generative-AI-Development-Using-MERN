import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
});
