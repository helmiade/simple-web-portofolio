// store/darkModeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    isDarkMode: true, 
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    enableDarkMode: (state) => {
      state.isDarkMode = true;
    },
    disableDarkMode: (state) => {
      state.isDarkMode = false;
    },
  },
});

export const { toggleDarkMode, enableDarkMode, disableDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
