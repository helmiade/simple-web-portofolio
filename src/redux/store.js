import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './feature/darkModeSlice';

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

export default store;
