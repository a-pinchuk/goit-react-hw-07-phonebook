import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './users/userSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: userReducer,
    filter: filterReducer,
  },
});
