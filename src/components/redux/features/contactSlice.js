import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6314d47bfc9dc45cb4f4b65e.mockapi.io',
    }),
   tagTypes:['Contact'],
  endpoints: (builder) => ({
    getContacts: builder.query({
        query: () => '/contacts',  
        providesTags:['Contact'],
    }),
  }),
})

export const { useGetContactsQuery } = contactsApi;