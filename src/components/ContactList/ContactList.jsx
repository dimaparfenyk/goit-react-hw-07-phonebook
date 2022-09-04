import React from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useGetContactsQuery } from "components/redux/features/contactSlice";
import { List, ListItem, Button, Text,SubText } from "./ContactList.styled";

export const ContactList = () => {
    const filter = useSelector(state => state.filter.value);
    // const contacts = useSelector(state => state.contacts.contacts);

    const { data, error, isLoading } = useGetContactsQuery()
   
    const dispatch= useDispatch()

    // const filteredItems = filter
    //     ? data.filter(({ name }) => name.toLowerCase().includes(filter))
    //     : data;
    
    return (<List>
        {data && data.map(({ name, phone, id}) =>
            <ListItem key={id}>
                <SubText>{name}:</SubText>
                <Text>{phone}</Text>
                <Button >Удалить</Button>    
            </ListItem>
        )}
    </List>)
};

ContactList.proptype = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
  ),
};
  
