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
      addContact: builder.mutation({
          query: values => ({
              url: '/contacts',
              method: 'POST',
              body:values,
          }),
          invalidatesTags:['Contact']
      }),
      deleteContact: builder.mutation({
          query: id => ({
              url: `/contacts/${id}`,
              method: 'DELETE',
          }),
          invalidatesTags:['Contact']
      })
  }),
})

export const {
    useGetContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation
} = contactsApi;