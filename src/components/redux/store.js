import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './features/contactSlice'
import filterSlice from './features/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter:filterSlice,
  },
})