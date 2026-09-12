import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/slice";
import usersReducer from "./users/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
