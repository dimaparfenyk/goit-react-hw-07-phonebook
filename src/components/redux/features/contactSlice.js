import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
    
    name: 'contacts',
    initialState: {
        contacts: []
    },
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload)
        },
        removeContact(state, action) {
        state.contacts = state.contacts.filter(({id}) => id !== action.payload);
        },
    },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;