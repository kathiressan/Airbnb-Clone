import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "../slices/darkmodeSlice";

export const store = configureStore({
  reducer: {
    darkmode: darkmodeReducer,
  },
});
