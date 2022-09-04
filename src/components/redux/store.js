import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './features/contactSlice';
import filterSlice from './features/filterSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]:contactsApi.reducer,
    filter:filterSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(), contactsApi.middleware],
})