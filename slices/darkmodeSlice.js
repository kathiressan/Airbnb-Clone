import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: false,
};

export const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    // Actions
    setDarkMode: (state) => {
      state.mode = true;
    },
    setLightMode: (state) => {
      state.mode = false;
    },
  },
});

export const { setDarkMode, setLightMode } = darkmodeSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectMode = (state) => state.darkmode.mode;

export default darkmodeSlice.reducer;
