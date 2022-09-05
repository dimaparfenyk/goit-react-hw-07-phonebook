import React from "react";
import PropTypes from 'prop-types';
import { useSelector} from 'react-redux';
import { useGetContactsQuery } from "components/redux/features/contactSlice";
import { List} from "./ContactList.styled";
import { ContactListItem } from "components/ContactItem/ContactItem";

export const ContactList = () => {
    const filter = useSelector(state => state.filter.value);
    const { data} = useGetContactsQuery()

    const filteredItems = filter
        ? data.filter(({ name }) => name.toLowerCase().includes(filter))
        : data;
    
    return (<List>
        {data && filteredItems.map(({ name, phone, id}) =>
            <ContactListItem
                key={id}
                id={id}
                name={name}
                phone={phone}
                />   
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
  
